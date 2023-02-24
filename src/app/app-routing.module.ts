import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegFormComponent } from './registration/reg-form/reg-form.component';
import { RegHomeComponent } from './registration/reg-home/reg-home.component';
import { SecondFormComponent } from './registration/second-form/second-form.component';
import { DashboardComponent } from './user-details/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'', children:[
      {
        path:'', component:RegFormComponent
      },
      {
        path:'secondform', component:SecondFormComponent
      }
    ],
    component:RegHomeComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
