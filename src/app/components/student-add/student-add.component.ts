import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { AlertCenterService, Alert, AlertType } from "ng2-alert-center";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html'
})
export class StudentAddComponent implements OnInit {

  newStudent: Student = new Student();

  constructor(private studentService: StudentService, private router: Router, private alertService: AlertCenterService) {
  }
  ngOnInit() {
  }
  addStudent() {
    if (this.newStudent.NationalId && this.newStudent.Name && this.newStudent.SchoolId && this.newStudent.Surname) {
      this.studentService.addStudent(this.newStudent);
      this.alertService.alert(Alert.create(AlertType.SUCCESS, 'It\'s time to add some <b>lesson</b>', 2000));
      setTimeout(()=>{
        this.addLesson(this.newStudent.NationalId);
   },2000);
      
    } else {
      const alert = Alert.create(AlertType.DANGER, 'Can\'t add a empty student! ', 3000);
      this.alertService.alert(alert);
    }
  }
  addLesson(id: string) {
    this.router.navigate(["/lessonadd"], {
      queryParams: { "id": id }
    });
  }
  goBackToList() {
    this.router.navigate(["/studentlist"]);
  }
}
