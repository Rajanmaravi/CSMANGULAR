import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMapRaInternComponent } from './update-map-ra-intern/update-map-ra-intern.component';
import { ViewMapRaInternComponent } from './view-map-ra-intern/view-map-ra-intern.component';
import { CreateMapRaInternComponent } from './create-map-ra-intern/create-map-ra-intern.component';

const routes: Routes = [
  {path:'',component:ViewMapRaInternComponent},
  {path:'create',component:CreateMapRaInternComponent},
  {path:'update',component:UpdateMapRaInternComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRaInternsRoutingModule { }
