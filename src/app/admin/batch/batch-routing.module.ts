import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchListComponent } from './batch-list/batch-list.component';
import { CreateBatchComponent } from './create-batch/create-batch.component';
import { UpdateBatchComponent } from './update-batch/update-batch.component';

const routes: Routes = [
  {path:'', component:BatchListComponent},
  {path:'createBatch', component:CreateBatchComponent},
  {path:'updateBatch',component:UpdateBatchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRoutingModule { }
