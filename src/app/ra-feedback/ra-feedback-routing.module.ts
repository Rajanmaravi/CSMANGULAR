import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaFeedbackComponent } from './ra-feedback/ra-feedback.component';
import { RaFeedbackListComponent } from './ra-feedback-list/ra-feedback-list.component';
import { EditRaFeedbackComponent } from './edit-ra-feedback/edit-ra-feedback.component';

const routes: Routes = [
  //{ path: 'create/:raCode', component: RaFeedbackComponent },
  { path: 'create', component: RaFeedbackComponent },
  {path:'view', component:RaFeedbackListComponent},
  {path:'edit', component:EditRaFeedbackComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaFeedbackRoutingModule { }
