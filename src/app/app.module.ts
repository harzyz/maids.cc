import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatNativeDateModule } from '@angular/material/core';
// import {JsonPipe} from '@angular/common';
// import { DatePickerComponent } from './date-picker/date-picker.component';
// import { CalendarModule } from 'primeng/calendar';
// import {provideNativeDateAdapter} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    UserlistComponent,
    UserComponent,
    // DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    ReactiveFormsModule,
    // JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
