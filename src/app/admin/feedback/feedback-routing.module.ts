import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestFeedbackComponent } from './request-feedback/request-feedback.component';
import { ViewRaFeedbackComponent } from './view-ra-feedback/view-ra-feedback.component';

const routes: Routes = [
  {path:'', component:RequestFeedbackComponent},
  {path:'view',component:ViewRaFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
