import { Component, OnInit } from '@angular/core';
import { JseUserService } from '../jse-user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';


@Component({
  selector: 'app-upload-jse-user',
  templateUrl: './upload-jse-user.component.html',
  styleUrl: './upload-jse-user.component.css'
})
export class UploadJseUserComponent implements OnInit {

  selectedFile: File | null = null;
  
  constructor(
    private jseUserService:JseUserService,
    private route:ActivatedRoute,
    private router:Router,
    private http: HttpClient
    ){}

  ngOnInit() {
    
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    debugger
    if (this.selectedFile) {   
       this.jseUserService.uploadJseFile(this.selectedFile).subscribe({
        next: (response) => {
          console.log(response);
          if (response.status.toLowerCase() === 'success') {
            Swal.fire({
                icon: 'success',
                title: 'Intern created successfully',
                text: 'Intern has been created successfully!',
            });
            this.router.navigate(['/intern']);
        } 
        else 
        {
          Swal.fire({
            icon: 'error',
            title: 'Intern upload failed',
            text: 'Intern has been upload failed!',
          });
           
        }
      },
      error: (error) => {
          console.error('File upload failed:', error);
      }
       })
    }
  }  
 
  async generateExcel()
  {

    const header = ['EmployeeCode', 'FirstName', 'MiddleName', 
    'LastName', 'Email', 'Mobile','PmCode',
      'PmEmail','Location','ProjectName','BatchId','TechnologyId','LoggedInUser'];
    const data = [
     ['Emp001', 'Ranjan', 'Kumar', 'Singh', 'ranjan@gmail.com','9876756435', 
     'PM004','pm4@gmail.com','Delhi','FCI',5,2,'CSM001'],
     ['Emp002', 'Bibhuranjan', 'Kumar', 'Singh', 'bibhuranjan@gmail.com','9876756400',
     'PM005','pm005@gmail.com','Patna','ILMS ODISHA',6,3,'CSM002'],     
    ];
    // Create workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Sharing Data');
    // Add Header Row
    const headerRow = worksheet.addRow(header);

   // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' }
      };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });

    // Add Data and Conditional Formatting
    data.forEach(d => 
    {
      const row = worksheet.addRow(d);
      const qty = row.getCell(5);
      if (qty && qty.value !== null && qty.value !== undefined)
       {
          let color = 'FF99FF99';
          if (+qty.value < 500) 
          {
              color = 'FF9999';
          }
          qty.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: color }
          };
        } 
        else 
        {
          console.error('Quantity or its value is null or undefined');
        }
      });

        worksheet.getColumn(3).width = 30;
        worksheet.getColumn(4).width = 30;
        worksheet.addRow([]);

        workbook.xlsx.writeBuffer().then((data: any) => {
            const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, 'JseUserExcell.xlsx');
        });

  }


}
