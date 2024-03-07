import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JseRaRoutingModule } from './jse-ra-routing.module';
import { CreateRaComponent } from './create-ra/create-ra.component';
import { ViewRaComponent } from './view-ra/view-ra.component';
import { UpdateRaComponent } from './update-ra/update-ra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [
    CreateRaComponent,
    ViewRaComponent,
    UpdateRaComponent
  ],
  imports: [
    CommonModule,
    JseRaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class JseRaModule { }
