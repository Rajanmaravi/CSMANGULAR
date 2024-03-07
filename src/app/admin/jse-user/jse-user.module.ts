import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JseUserRoutingModule } from './jse-user-routing.module';
import { CreateJseUserComponent } from './create-jse-user/create-jse-user.component';
import { UpdateJseUserComponent } from './update-jse-user/update-jse-user.component';
import { ViewJseUserComponent } from './view-jse-user/view-jse-user.component';
import { UploadJseUserComponent } from './upload-jse-user/upload-jse-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [
    CreateJseUserComponent,
    UpdateJseUserComponent,
    ViewJseUserComponent,
    UploadJseUserComponent
  ],
  imports: [
    CommonModule,
    JseUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class JseUserModule { }
