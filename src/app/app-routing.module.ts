import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaFeedbackComponent } from './ra-feedback/ra-feedback/ra-feedback.component';


const routes: Routes = [
  { path:'', loadChildren: () => import('./_auth/auth.module').then(m => m.AuthModule) },
  {path:'admin',loadChildren:() => import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'rafeedback',loadChildren:()=>import('./ra-feedback/ra-feedback.module').then(m=>m.RaFeedbackModule),
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
