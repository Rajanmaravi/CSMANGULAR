import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 

import { TechnologyRoutingModule } from './technology-routing.module';
import { CreateTechnologyComponent } from './create-technology/create-technology.component';
import { TechnologyListComponent } from './technology-list/technology-list.component';
import { UpdateTechnologyComponent } from './update-technology/update-technology.component';
import { ShareModule } from '../../share/share.module';

@NgModule({
  declarations: [
    CreateTechnologyComponent,
    TechnologyListComponent,
    UpdateTechnologyComponent,
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class TechnologyModule { }
