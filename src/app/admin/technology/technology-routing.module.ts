import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyListComponent } from './technology-list/technology-list.component';
import { UpdateTechnologyComponent } from './update-technology/update-technology.component';
import { CreateTechnologyComponent } from './create-technology/create-technology.component';

const routes: Routes = [
  {path:'',component:TechnologyListComponent},
  {path:'techUpdate',component:UpdateTechnologyComponent},
  {path:'techCreate',component:CreateTechnologyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
