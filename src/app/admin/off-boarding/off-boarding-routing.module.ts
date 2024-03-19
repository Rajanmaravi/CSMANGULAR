import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOffBoardingComponent } from './view-off-boarding/view-off-boarding.component';
import { CreateOffBoardingComponent } from './create-off-boarding/create-off-boarding.component';
import { UpdateOffBoardingComponent } from './update-off-boarding/update-off-boarding.component';

const routes: Routes = [
  {path:'', component:ViewOffBoardingComponent},
  {path:'create',component:CreateOffBoardingComponent},
  {path:'update',component:UpdateOffBoardingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffBoardingRoutingModule { }
