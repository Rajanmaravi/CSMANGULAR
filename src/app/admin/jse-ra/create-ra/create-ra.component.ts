import { Component, OnInit } from '@angular/core';
import { raDto } from '../../../_dto/reporting-dao.model';
import { FormGroup } from '@angular/forms';
import { JseRaService } from '../jse-ra.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ra',
  templateUrl: './create-ra.component.html',
  styleUrl: './create-ra.component.css'
})
export class CreateRaComponent implements OnInit {

  raForm: FormGroup | any ;

  reporting: raDto = {
    raCode: '',
    raName: '',
    raEmail: '',
    raPhone: '',
    isActive: false,
    loggedInUser: ''
  };

  constructor(
    private raService:JseRaService,
    private router:Router
  ){}

  ngOnInit(): void {
    
  }

  registerRA(){
    debugger
    console.log(this.reporting);

    this.raService.CreateReportingAuthority(this.reporting).subscribe({
       next:(response)=>{
          console.log(response);
          if(response ==='success'){
            Swal.fire({
              icon: 'success',
              title: 'RA created successfully',
              text: 'Reporting Authority has been created successfully!',
            });
    
            this.router.navigate(['map/jsera']);
          }else{
            Swal.fire({
              icon: 'error',
              title: 'RA created fail',
              text: 'Reporting Authority creation has been fail',
            })
          }
       },
       error:(error) =>{
         console.error("Reporting Authority registration fail",error);
       }
    })

  }

}
