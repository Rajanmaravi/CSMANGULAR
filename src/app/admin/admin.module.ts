import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ReportModule } from './report/report.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { BatchModule } from './batch/batch.module';
import { TechnologyModule } from './technology/technology.module';
import { JseUserModule } from './jse-user/jse-user.module';
import { OffBoardingModule } from './off-boarding/off-boarding.module';
import { AssessmentModule } from './assessment/assessment.module';




@NgModule({
  declarations: [ 
    AdminDashboardComponent, AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FeedbackModule,
    ReportModule,
    BatchModule,
    TechnologyModule,
    JseUserModule,
    FeedbackModule,
    OffBoardingModule,
    AssessmentModule
  ]
})
export class AdminModule { }
