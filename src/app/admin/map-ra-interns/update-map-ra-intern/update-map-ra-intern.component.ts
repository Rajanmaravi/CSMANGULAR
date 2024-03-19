import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JseUserMapRADto } from '../../../_dto/reporting-dao.model';
import { BatchService } from '../../batch/batch.service';
import { TechnologyService } from '../../technology/technology.service';
import { JseUserService } from '../../jse-user/jse-user.service';
import {JseUser, Technology, Batch, RA, JseUserDetails} from '../../../_dto/intern-dao.model';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { MapInternRaService } from '../map-intern-ra.service';

@Component({
  selector: 'app-update-map-ra-intern',
  templateUrl: './update-map-ra-intern.component.html',
  styleUrl: './update-map-ra-intern.component.css'
})
export class UpdateMapRaInternComponent implements OnInit {

  updateMapRaInternsForm: FormGroup | any ;
  technologies: Technology[]=[];
  batches: Batch[]=[];
  raList: RA[]=[];
  employeeOptions:JseUserDetails[]=[];

  updateMapRaIntern : JseUserMapRADto = {
    id: 0,
    employeeCode: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobile: '',
    raCode: '',
    raName: '',
    raEmail: '',
    batchId: 0,
    batchCode: '',
    batchName: '',
    technologyId: 0,
    technologyCode: '',
    technologyName: '',
    isActive: false,
    isDeleted: false,
    createdOn: new Date,
    modifiedOn: new Date,
    createdBy: '',
    modifiedBy: '',
    loggedInUser: ''
  }

  constructor(
    private batchService:BatchService,
    private technologyService:TechnologyService,
    private jseUserService: JseUserService,
    private mapInternRAService: MapInternRaService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit() {
    debugger

    this.getBatchData();
    this.TechnologyDetails();
    this.getRaData();
    this.getJseUser();

    this.route.queryParams.subscribe(params => {
      const jseData = params['jseUserMapToRAData'];
      if (jseData) {
        console.log('Jse User Data:', jseData);
        const decodedData = decodeURIComponent(jseData);
        const actualData = JSON.parse(decodedData);
        this.updateMapRaIntern = actualData;
        console.log('Jse User Data:', actualData);
      }
    });
  }

  getBatchData() {
    this.batchService.getBatchList().subscribe({
      next: (response) => {
        console.log("batch data:",response)
        this.batches = response; 
      },
      error: (error) => {
        console.error('Error fetching batch data:', error);
      }
    });
  }

  getRaData(){
    this.batchService.getRaList().subscribe({
      next:(Response) =>{
         this.raList = Response;
      },
      error: (error) =>{
        console.error('Error fetching ra data:',error);
      }
    })
  }

  TechnologyDetails(){
    debugger
      this.technologyService.getTechnology().subscribe({
        next:(response) =>{
           console.log("technology data",response);
           this.technologies = response;
        }
      })
  }

  getJseUser()
  {
     this.jseUserService.getJseUserDetails().subscribe({
      next:(response)=>{
        console.log('data::', response);
        this.employeeOptions = response;
      }
     })
  }

  updateRaEmail(): void
{
  const selectedRA = this.raList.find(ra => ra.raCode === this.updateMapRaIntern.raCode);
  if (selectedRA) {
      this.updateMapRaIntern.raEmail = selectedRA.raEmail;
  } else {
      this.updateMapRaIntern.raEmail = ''; 
  }
}  


UpdatMapRaInternDetails(){
  if(this.updateMapRaIntern){
    this.mapInternRAService.updateMapRAJseUserDetails(this.updateMapRaIntern).subscribe({
      next:(response)=>{
        if(response ==="success"){
          console.log('Map RA Jse Details updated successfully:', response);
          Swal.fire({
            icon: 'success',
            title: 'Map RA Jse User update successful',
            text: 'Map RA Jse user details updated successfully!',
          });

          this.router.navigate(['map/mapra']);
        }else{
          Swal.fire({
            icon: 'error', 
            title: 'Map RA Jse User Update Fail',
            text: 'Map RA Jse user details updated Fail!',
          });
          
        }
      },
      error: (error: any) => {
        console.error('Error updating map Ra jse details:', error);
      }
    })
  }else {
    console.error('Map RA is undefined.');
  }
}

}

