import { Component, OnInit } from '@angular/core';
import { JseUserService } from '../../jse-user/jse-user.service';
import { JseUserDao, OffBoardingJse } from '../../../_dto/intern-dao.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { OffBoardService } from '../off-board.service';

@Component({
  selector: 'app-create-off-boarding',
  templateUrl: './create-off-boarding.component.html',
  styleUrl: './create-off-boarding.component.css'
})
export class CreateOffBoardingComponent implements OnInit {

  createOffBoardingForm:FormGroup|any;
  jseDetails:JseUserDao[]=[];

  offBoardingUser:OffBoardingJse={
    id:0,
    jseId: 0,
    dol: new Date,
    leavingReason: '',
    loggedInUser: ''
  }

  constructor(
    private jseUserService:JseUserService,
    private fb:FormBuilder,
    private router:Router,
    private boardingService:OffBoardService
  ){}

  ngOnInit(){
    this.formValidate();
    this.getJseUsers();
  }

  formValidate(){
    this.createOffBoardingForm = this.fb.group({
      jseId: ['', Validators.required],
      dol: ['',Validators.required],
      leavingReason:['',Validators.required],
    });
  }

  getJseUsers(){
    this.jseUserService.getJseUser().subscribe({
     next:(response) =>{
        this.jseDetails = response;
     }
    })
  }

  createBoarding(){
    console.log(this.offBoardingUser);
    this.boardingService.createOffBoarding(this.offBoardingUser).subscribe({
      next:(response)=>{
        console.log(response);
        console.log('Off boarding jse create successful', response);
        Swal.fire({
          icon: 'success',
          title: 'Off boarding jse successfully',
          text: 'Off boarding jse has been successfully!',
        });
        this.router.navigate(['map/offboard']);
      },
      error: (error) => {
        console.error('Off boarding jse registration failed', error);
      }
    })
  }

}
