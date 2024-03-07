import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRaComponent } from './view-ra/view-ra.component';
import { CreateRaComponent } from './create-ra/create-ra.component';
import { UpdateRaComponent } from './update-ra/update-ra.component';

const routes: Routes = [
  {path:'', component:ViewRaComponent},
  {path:'createra', component:CreateRaComponent},
  {path:'updatera', component:UpdateRaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JseRaRoutingModule { }
