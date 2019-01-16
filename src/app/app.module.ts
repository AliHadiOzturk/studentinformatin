import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentService } from './services/student.service';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './/app-routing.module';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { StudentFromArrayService } from './services/student-from-array.service';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { LessonAddComponent } from './components/lesson-add/lesson-add.component';
import { AlertCenterModule,AlertCenterService } from "ng2-alert-center";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentEditComponent,
    WelcomePageComponent,
    LessonListComponent,
    StudentAddComponent,
    LessonAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    AlertCenterModule,
    BrowserAnimationsModule
  ],
  providers: [{provide:StudentService,useClass:StudentFromArrayService},AlertCenterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
