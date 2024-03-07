import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { CreateRaFeedbackComponent } from './feedback/create-ra-feedback/create-ra-feedback.component';

const routes: Routes = [
  {path:'', component:AdminComponent, children:[
    { path: 'feedback/create', component: CreateRaFeedbackComponent },
    { path: 'feedback/create/:employeeCode', component: CreateRaFeedbackComponent },
    { path:'',component:AdminDashboardComponent},
    { path:'batch', loadChildren: () => import('../admin/batch/batch.module').then(m => m.BatchModule) },
    { path:'technology', loadChildren:() => import('../admin/technology/technology.module').then(m=>m.TechnologyModule)},
    { path:'intern', loadChildren:() => import('../admin/jse-user/jse-user.module').then(m=>m.JseUserModule)},
    { path:'jsera',loadChildren:() => import('../admin/jse-ra/jse-ra.module').then(m => m.JseRaModule)},
    { path:'mapra', loadChildren:() => import('../admin/map-ra-interns/map-ra-interns.module').then(m=>m.MapRaInternsModule)},
    { path:'feedback', loadChildren:() => import('../admin/feedback/feedback.module').then(m=>m.FeedbackModule)},
    { path: '**', redirectTo: '' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
