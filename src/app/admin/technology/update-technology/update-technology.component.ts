import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technology } from '../../../_dto/technology-dao.model';
import { TechnologyService } from '../technology.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-technology',
  templateUrl: './update-technology.component.html',
  styleUrl: './update-technology.component.css'
})
export class UpdateTechnologyComponent implements OnInit {

  technology : Technology | any

  constructor(
    private route:ActivatedRoute,
     private router:Router,
     private technologyService: TechnologyService
    ){}

  ngOnInit() {
    debugger
    this.route.queryParams.subscribe(params => {
      const techData = params['techData'];
      if (techData) {
        console.log('Technology Data:', techData);
        const decodedData = decodeURIComponent(techData);
        const actualData = JSON.parse(decodedData);
        this.technology = actualData;
        console.log('Technology Data:', actualData);
      }
    });
  }

  updateTech() {
    if (this.technology) {
      console.log('Updating Batch:', this.technology);
       debugger;
      this.technologyService.updateTechnology(this.technology).subscribe({
        next: (response) => {
          if(response ==="success")
          console.log('Technology updated successfully:', response);
          Swal.fire({
            icon: 'success',
            title: 'Technology update successful',
            text: 'Technology updated successfully!',
          });

          this.router.navigate(['map/technology']);
          
        },
        error: (error: any) => {
          console.error('Error updating batch:', error);
        }
      });
    } else {
      console.error('Technology is undefined.');
    }
  }

}
