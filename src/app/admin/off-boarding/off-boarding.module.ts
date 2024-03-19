import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffBoardingRoutingModule } from './off-boarding-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../share/share.module';
import { ViewOffBoardingComponent } from './view-off-boarding/view-off-boarding.component';
import { CreateOffBoardingComponent } from './create-off-boarding/create-off-boarding.component';
import { UpdateOffBoardingComponent } from './update-off-boarding/update-off-boarding.component';


@NgModule({
  declarations: [
    ViewOffBoardingComponent,
    CreateOffBoardingComponent,
    UpdateOffBoardingComponent
  ],
  imports: [
    CommonModule,
    OffBoardingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class OffBoardingModule { }
