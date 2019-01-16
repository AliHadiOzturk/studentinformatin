import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html'
})
export class LessonListComponent implements OnInit {

  currentStudent: Student;
  tcNo: string;
  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) {
    this.route.queryParams.subscribe(x => {
      this.tcNo = x["id"],
        this.currentStudent = studentService.getStudent(this.tcNo);
    })
  }
  goBackToList() {
    this.router.navigate(["/studentlist"]);
  }
  goBackToStudentEdit(id: string) {
    this.router.navigate(["/studentedit"], { 
      queryParams: { "id": id } });
  }
  addLesson(id: string) {
    this.router.navigate(["/lessonadd"], { 
      queryParams: { "id": id } })
  }
  ngOnInit() {
  }

}
