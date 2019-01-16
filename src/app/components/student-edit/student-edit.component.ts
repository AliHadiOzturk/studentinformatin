import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Lesson } from '../../models/lesson.model';
import { AlertCenterService } from 'ng2-alert-center';
import { Alert } from 'ng2-alert-center/alert-center/model/alert';
import { AlertType } from 'ng2-alert-center/alert-center/model/alert-type';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html'
})
export class StudentEditComponent implements OnInit {

  public currentStudent: Student;
  public tckNo: string = '';
  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router,private alertService:AlertCenterService) {
    this.route.queryParams.subscribe(param => {
      this.tckNo = param['id'];
      this.currentStudent = this.studentService.getStudent(this.tckNo);
    });
  }
  openLessons(id: string) {
    this.router.navigate(["/lessonlist"],
      { queryParams: { "id": id } })
  };
  goBackToList(){
    this.router.navigate(["/studentlist"]);
  }
  updateStudent(student:Student){
    this.studentService.updateStudent(student);
    this.alertService.alert(Alert.create(AlertType.SUCCESS,"<b>Succesful</b><br>routing...",2000,true))
    setTimeout(()=>{  
      this.goBackToList();
 },2000);
    
  }
  ngOnInit() {
  }

}
