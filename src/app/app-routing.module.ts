import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { LessonAddComponent } from './components/lesson-add/lesson-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'studentedit', component: StudentEditComponent },
  { path: 'studentlist', component: StudentListComponent },
  { path: 'lessonlist', component: LessonListComponent },
  { path: 'lessonadd', component: LessonAddComponent },
  { path: 'studentadd', component: StudentAddComponent },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
