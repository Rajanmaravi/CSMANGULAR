import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { raDto } from '../../../_dto/reporting-dao.model';
import { JseRaService } from '../jse-ra.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-ra',
  templateUrl: './update-ra.component.html',
  styleUrl: './update-ra.component.css'
})
export class UpdateRaComponent {

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
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit() {
    debugger
    this.route.queryParams.subscribe(params => {
      const raData = params['raData'];
      if (raData) {
        console.log('Batch Data:', raData);
        const decodedData = decodeURIComponent(raData);
        const actualData = JSON.parse(decodedData);
        this.reporting = actualData;
        console.log('Batch Data:', actualData);
      }
    });
  }

  updateRA() {
    if (this.reporting) {
      console.log('Updating Batch:', this.reporting);
  
      this.raService.updateRAData(this.reporting).subscribe({
        next: (response) => {
          if(response ==="success")
          console.log('Reporting Authority updated successfully:', response);
          Swal.fire({
            icon: 'success',
            title: 'Reporting Authority update successful',
            text: 'Reporting Authority updated successfully!',
          });

          this.router.navigate(['map/jsera']);
          
        },
        error: (error: any) => {
          console.error('Error updating Reporting Authority:', error);
        }
      });
    } else {
      console.error('Reporting Authority is undefined.');
    }
  }

}
