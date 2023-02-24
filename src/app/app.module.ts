import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './registration/sidebar/sidebar.component';
import { RegHomeComponent } from './registration/reg-home/reg-home.component';
import { RegFormComponent } from './registration/reg-form/reg-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondFormComponent } from './registration/second-form/second-form.component';
import { DashboardComponent } from './user-details/dashboard/dashboard.component';
import { HomeSidebarComponent } from './user-details/home-sidebar/home-sidebar.component';
import { FixedBtnComponent } from './user-details/fixed-btn/fixed-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RegHomeComponent,
    RegFormComponent,
    SecondFormComponent,
    DashboardComponent,
    HomeSidebarComponent,
    FixedBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
