
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginRequest, OTPDaoModel, UserDaoModel } from '../_dto/user-dao.model';
import { RefreshDaoModel } from '../_dto/refresh-dao.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  randomCombination: any;
  private rootUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  RegisterUser(userModel: any): Observable<any> {
   
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   
    let post: UserDaoModel = {
      isActive: true,
      loggedInUser: userModel.firstName,
      employeeCode: userModel.employeeCode,
      firstName: userModel.firstName,
      middleName: userModel.middleName,
      lastName: userModel.lastName,
      refreshToken: "",
      refreshTokenExpiresOn: new Date,
      password: userModel.password,
      roleId: 2,
      userRole: "User",
      email:userModel.email,
    }

    return this.http.post(`${this.rootUrl}/api/User/Create`, post, {
      headers: headers,
      responseType: 'text' 
    });
  }

  UserLogin(data:any):Observable<any>{
  debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let login: LoginRequest = {
      userName: data.userName,
      password: data.password,
    }
    localStorage.setItem('userCode', data.userName);
    return this.http.post<any>(`${this.rootUrl}/api/Auth/login`, login, { headers: headers});
  }


  setToken(token: string, refreshToken: string, expirationDay: string, expirationTimeInHours: number,userRole:string): void {
    debugger;
    const currentTimestamp = new Date();
    const parsedExpirationDay = new Date(expirationDay);
    let tokenData: RefreshDaoModel = {
      token: token,
      refreshToken: refreshToken,
      expirationTimeInHours: expirationTimeInHours ? expirationTimeInHours * 60 * 60 * 1000 : null,
      tokenExpirationDay: parsedExpirationDay || null,
      userRole: userRole,
      expirationTimestamp:  parsedExpirationDay.getTime() - currentTimestamp.getTime() , 
    };
   
    let tokenDataJson = JSON.stringify(tokenData);
    localStorage.setItem('token', tokenDataJson);
  }

  refreshDto(arg0: string, refreshDto: any) {
    throw new Error('Method not implemented.');
  }

  getTokens(): { token: string | null; refreshToken: string | null } {
    
    const storedTokenDataJson = localStorage.getItem('token');
    const storedTokenData: RefreshDaoModel | null = storedTokenDataJson ? JSON.parse(storedTokenDataJson) : null;

    return {
      token: storedTokenData ? storedTokenData.token : null,
      refreshToken: storedTokenData ? storedTokenData.refreshToken : null,
    };
  }

  isTokenExpired(): boolean {
    const currentTimestamp = new Date().getTime();
    const expirationTimestamp = this.getExpirationTimestamp();
    if (!expirationTimestamp) {
      return true;
    }
    const timeToRefreshMs = 5 * 60 * 1000; // 5 minutes before expiration
    if (expirationTimestamp < timeToRefreshMs) {
      this.refreshTokens();
    }
    return currentTimestamp > expirationTimestamp;
  }
  

  private getExpirationTimestamp(): number | null {
    const storedTokenDataJson = localStorage.getItem('token');
    const storedTokenData: RefreshDaoModel | null = storedTokenDataJson ? JSON.parse(storedTokenDataJson) : null;
    const expirationTimestamp = storedTokenData?.expirationTimestamp;
    return expirationTimestamp ? +expirationTimestamp : null;
  }

  refreshTokens(): Observable<any> {
    const { token, refreshToken } = this.getTokens();
    if (!refreshToken) {
       throw new Error('Refresh token not available');
    }

    const refreshRequest = {
      refreshToken: refreshToken,
      accessToken: token,
    };

    return this.http.post(`${this.rootUrl}/api/Auth/RefreshToken`, refreshRequest).pipe(
      tap((response: any) => {
        const newToken = response.token;
        const newRefreshToken = response.refreshToken;
        const newExpirationDay = response.refreshTokenExpiryTime; 
        const newExpirationTimeInHours = response.dateOfExpiry;
        const newuserRole = response.userRole;

        this.setToken(newToken, newRefreshToken, newExpirationDay, newExpirationTimeInHours,newuserRole);
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  } 

  generateRandomAlphanumeric(): string {
    const length = 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }
  logout(): void {
    debugger;
    localStorage.removeItem('token');
  }


  sendOtp(userModel: any): Observable<any> {
   
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   
    let post: OTPDaoModel = {
      employeeCode: userModel.userName,
      email:userModel.email,
      otp:'',
      password:'',
      otpExpiration:new Date()
    }

    return this.http.post<any>(`${this.rootUrl}/api/User/SendOtp`, post);
  }

  validateUserOtp(userModel: any): Observable<any> {
   
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.rootUrl}/api/User/ValidateUserOTP`, userModel);
  }

  changeUserPassword(data: any): Observable<any> { 
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.rootUrl}/api/User/ForgetPassword`, data, {
      headers: headers,
      responseType: 'text' 
    });
  }

  generateRandom():Observable<any> {
    debugger;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return  of(result);

  }

}