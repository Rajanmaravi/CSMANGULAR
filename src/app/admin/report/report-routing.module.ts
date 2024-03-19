import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentReportComponent } from './assessment-report/assessment-report.component';

const routes: Routes = [
  {path:'assessment', component:AssessmentReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
