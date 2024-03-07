import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRaInternsRoutingModule } from './map-ra-interns-routing.module';
import { UpdateMapRaInternComponent } from './update-map-ra-intern/update-map-ra-intern.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../share/share.module';
import { CreateMapRaInternComponent } from './create-map-ra-intern/create-map-ra-intern.component';
import { ViewMapRaInternComponent } from './view-map-ra-intern/view-map-ra-intern.component';


@NgModule({
  declarations: [
    UpdateMapRaInternComponent,
    CreateMapRaInternComponent,
    ViewMapRaInternComponent
  ],
  imports: [
    CommonModule,
    MapRaInternsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class MapRaInternsModule { }
