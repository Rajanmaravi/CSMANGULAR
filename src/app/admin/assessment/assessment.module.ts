import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentRoutingModule } from './assessment-routing.module';
import { CreateAssessmentComponent } from './create-assessment/create-assessment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [
    CreateAssessmentComponent
  ],
  imports: [
    CommonModule,
    AssessmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class AssessmentModule { }
