import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
//import { MapRaInternComponent } from './map-ra-intern/map-ra-intern.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../share/share.module';
import { ViewLogsComponent } from './view-logs/view-logs.component';
import { RequestFeedbackComponent } from './request-feedback/request-feedback.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CreateRaFeedbackComponent } from './create-ra-feedback/create-ra-feedback.component';
import { ViewRaFeedbackComponent } from './view-ra-feedback/view-ra-feedback.component';
import { ConformRaFeedbackComponent } from './conform-ra-feedback/conform-ra-feedback.component';
import { ValidatedRaFeedbackComponent } from './validated-ra-feedback/validated-ra-feedback.component';


@NgModule({
  declarations: [
    ViewLogsComponent,
    RequestFeedbackComponent,
    CreateRaFeedbackComponent,
    ViewRaFeedbackComponent,
    ConformRaFeedbackComponent,
    ValidatedRaFeedbackComponent,
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
    NgMultiSelectDropDownModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FeedbackModule { }
