import { Component, OnInit } from '@angular/core';

import {Technology, Batch, JseUserDao } from '../../../_dto/intern-dao.model';
import { BatchService } from '../../batch/batch.service';
import { TechnologyService } from '../../technology/technology.service';
import { AssementDao, AssessmentJseDao, AssessmentReportDetails } from '../../../_dto/assessment-dao.model';
import { AssessmentService } from '../../assessment/assessment.service';
import { JseUserService } from '../../jse-user/jse-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssessmentReportService } from '../assessment-report.service';

import  jsPDF from 'jspdf';
import 'jspdf-autotable';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assessment-report',
  templateUrl: './assessment-report.component.html',
  styleUrl: './assessment-report.component.css'
})
export class AssessmentReportComponent implements OnInit {

  technologies: Technology[]=[];
  batches: Batch[]=[];
  assessment:AssementDao[]=[];
  jseDetails:JseUserDao[]=[];

  reportDetails: AssessmentReportDetails[]=[];

  assessmentReportForm: FormGroup|any;

  items:[]=[];

  assessmentReport={
    batchId:0,
    technologyId:0,
    assessmentId:0,
    employeeCode:'',
  }

  constructor(
    private batchService:BatchService,
    private technologyService:TechnologyService,
    private assessmentService:AssessmentService,
    private jseUserService:JseUserService,
    private fb:FormBuilder,
    private assessmentReportService:AssessmentReportService
  ){}

   ngOnInit() {
      this.getAssessment();
      this.getBatchData();
      this.TechnologyDetails();
      this.getJseUsers();  
      this.validateAssessmentReportForm();
   }

   validateAssessmentReportForm() {
    this.assessmentReportForm = this.fb.group({
      assessmentId: ['', Validators.required], 
      employeeCode: ['', Validators.required] 
    });

    this.assessmentReportForm.get('assessmentId').valueChanges.subscribe(() => {
      debugger
      console.log('AssessmentId validity:', this.assessmentReportForm.get('assessmentId').valid);
    });

  }

  getAssessmentReport(){
      const formData = {
        batchId : this.assessmentReport.batchId,
        technologyId : this.assessmentReport.technologyId,
        assessmentId : this.assessmentReport.assessmentId,
        employeeCode : this.assessmentReport.employeeCode
      }



      this.assessmentReportService.getAssessmentReport(formData).subscribe({
        next:(response) =>{
          debugger
          if(response.length === 0){
            Swal.fire({
              icon: 'success',
              title: 'No record found',
              text: 'NO record available!',
            });
          }
          this.reportDetails = response;
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

  getAssessment(){
    this.assessmentService.getAssessment().subscribe({
      next:(response)=>{
        this.assessment = response;
      }
    })
  }

  getJseUsers(){
    this.jseUserService.getJseUser().subscribe({
     next:(response) =>{
        this.jseDetails = response;
        this.items = response.empFullName;
     }
    })
  }

  private getTableData(): any[][] {
   
    return this.reportDetails.map((c, index) => [
      c.employeeCode,
      c.firstName,
      c.lastName,
      c.email,
      c.mobile,
      c.batchName,
      c.technologyName,
      c.fullMark,
      c.securedMark
         
    ]);
   
  }

  exportToPDF() {
    const doc = new jsPDF();
 
    const data = this.getTableData();
 
    // Add title centered
    const pageTitle = 'Jse Assessment Report Details';
    const textWidth = doc.getTextDimensions(pageTitle).w;
    const pageWidth = doc.internal.pageSize.getWidth();
    const x = (pageWidth - textWidth) / 2;
    doc.text(pageTitle, x, 10);
 
    // Add the table
    (doc as any).autoTable({
      head: [['Employee Code', 'First Name', 'Last Name', 'Email', 'Mobile',
       'Batch Name','Technology Name','Full Mark','Secured Mark']],
      body: data,
      startY: 20,
      margin: { top: 15 },
      columnStyles: { 0: { columnWidth: 20 }, 1: { columnWidth: 20 }, 2: { columnWidth: 20 },
       3: { columnWidth: 30 }, 4: { columnWidth: 20 }, 5: { columnWidth: 20 }, 6: { columnWidth: 30 }, 
       7: { columnWidth: 20 }, 8: { columnWidth: 20 } }
    });
 
    doc.save('Jse_Assessment_Report.pdf');
  }

  exportToExcel()  {
   
    const tableData = this.getTableData();
 
   
    const headerStyle = { bold: true };
    const header = [
        { v: 'Employee Code', s: headerStyle },
        { v: 'First Name', s: headerStyle },
        { v: 'Last Name', s: headerStyle },
        { v: 'Email', s: headerStyle },
        { v: 'Mobile', s: headerStyle },
        { v: 'Batch Name', s: headerStyle },
        { v: 'Technology Name', s: headerStyle },
        { v: 'Full Mark', s: headerStyle },
        { v: 'Secured Mark', s: headerStyle }
    ];
   
    tableData.unshift(header);
 
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(tableData);
 
    XLSX.utils.sheet_add_aoa(worksheet, [header], { origin: 'A1' });
 
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'Jse_Assessment_Report');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, fileName + '_export_' + new Date().getTime() + '.xlsx');
  }


  searchItems(event: any) {
    const value = event.target.value;

    this.filterItems(value);
  }

  filterItems(value: string) {
    const filterValue = value.toLowerCase();
    this.jseDetails = this.items.filter((item: any) =>
        item.empFullName.toLowerCase().includes(filterValue)
    );
  }


}
