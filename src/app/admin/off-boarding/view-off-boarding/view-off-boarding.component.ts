import { Component, OnInit } from '@angular/core';
import { OffBoardJse } from '../../../_dto/offBoard-dao.model';
import { OffBoardService } from '../off-board.service';
import { BatchService } from '../../batch/batch.service';
import { TechnologyService } from '../../technology/technology.service';
import { FormBuilder } from '@angular/forms';
import {Technology, Batch } from '../../../_dto/intern-dao.model';

@Component({
  selector: 'app-view-off-boarding',
  templateUrl: './view-off-boarding.component.html',
  styleUrl: './view-off-boarding.component.css'
})
export class ViewOffBoardingComponent implements OnInit {

  searchText:string|any;

  offBoard:OffBoardJse[]=[];
  technologies: Technology[]=[];
  batches: Batch[]=[];
  offboardInterns={
    batchId:0,
    technologyId:0
  }

  constructor(
    private boardService:OffBoardService,
    private batchService:BatchService,
    private technologyService:TechnologyService,
    private fb:FormBuilder,
  ){}

  ngOnInit() {
   // this.getOffBoardUser();
    this.getBatchData();
    this.TechnologyDetails();
  }

  getOffboard(){
    debugger;
      const formData = {
         batchId: this.offboardInterns.batchId,
         technologyId:this.offboardInterns.technologyId
      }
      console.log("form Data:", formData);

      this.boardService.getOffBoard(formData).subscribe({
        next:(response) =>{
           console.log("Offboarding Report",response);
           this.offBoard = response;
        }
      })
  }

  getOffBoardUser(){
    this.boardService.getOffBoardJseUser().subscribe({
      next:(response) =>{
        this.offBoard = response;
      }
    })
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

  TechnologyDetails(){
    debugger
      this.technologyService.getTechnology().subscribe({
        next:(response) =>{
           console.log("technology data",response);
           this.technologies = response;
        }
      })
  }


  updateOffBoard(id:any){

  }
  deleteOffBoard(data:any){

  }

}
