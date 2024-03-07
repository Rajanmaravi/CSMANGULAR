import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewJseUserComponent } from './view-jse-user/view-jse-user.component';
import { CreateJseUserComponent } from './create-jse-user/create-jse-user.component';
import { UpdateJseUserComponent } from './update-jse-user/update-jse-user.component';
import { UploadJseUserComponent } from './upload-jse-user/upload-jse-user.component';

const routes: Routes = [
  {path:'',component:ViewJseUserComponent},
  {path:'createintern',component:CreateJseUserComponent},
  {path:'updateintern',component:UpdateJseUserComponent},
  {path:'uploadintern',component:UploadJseUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JseUserRoutingModule { }
