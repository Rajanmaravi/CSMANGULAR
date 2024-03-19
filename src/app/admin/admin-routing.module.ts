import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path:'map', component:AdminComponent, children:[
    { path:'dashboard',component:AdminDashboardComponent},
    { path:'batch', loadChildren: () => import('../admin/batch/batch.module').then(m => m.BatchModule) },
    { path:'technology', loadChildren:() => import('../admin/technology/technology.module').then(m=>m.TechnologyModule)},
    { path:'intern', loadChildren:() => import('../admin/jse-user/jse-user.module').then(m=>m.JseUserModule)},
    { path:'jsera',loadChildren:() => import('../admin/jse-ra/jse-ra.module').then(m => m.JseRaModule)},
    { path:'mapra', loadChildren:() => import('../admin/map-ra-interns/map-ra-interns.module').then(m=>m.MapRaInternsModule)},
    { path:'feedback', loadChildren:() => import('../admin/feedback/feedback.module').then(m=>m.FeedbackModule)},
    {path:'offboard', loadChildren:()=> import('../admin/off-boarding/off-boarding.module').then(m=>m.OffBoardingModule)},
    {path:'assessment',loadChildren:()=>import('../admin/assessment/assessment.module').then(m=>m.AssessmentModule)},
    {path:'report',loadChildren:()=> import('../admin/report/report.module').then(m=>m.ReportModule)},
    // { path: '**', redirectTo: '' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
