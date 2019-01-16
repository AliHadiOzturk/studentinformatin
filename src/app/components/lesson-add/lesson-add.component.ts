import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { Lesson } from '../../models/lesson.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html'
})
export class LessonAddComponent implements OnInit {

  currentStudent:Student;
  TckNo:string;
  studentLesson:Lesson=new Lesson();
  constructor(private route:ActivatedRoute,private studentService:StudentService,private router:Router) { 
    this.route.queryParams.subscribe(x=>{
      this.TckNo=x["id"],
      this.currentStudent=studentService.getStudent(this.TckNo);
      if(this.currentStudent.Lessons==null){
        this.currentStudent.Lessons=[];
      }
    })
  }
  ngOnInit() {
  }
  addLessonToStudent(){
    this.currentStudent.Lessons.push(this.studentLesson);
    this.studentLesson=new Lesson();
  }
  addLesson(student:Student){
    this.addLessonToStudent();
    this.studentService.addLesson(student);
  }
  goBackToLessons(id) {
    this.router.navigate(["/lessonlist"],
      { queryParams: { "id": id } })
  };
  goToList() {
    this.router.navigate(["/studentlist"])
  }
}
