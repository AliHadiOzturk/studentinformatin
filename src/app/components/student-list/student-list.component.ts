import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { Router, RouterModule, Routes } from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {

  students: Array<Student> = [];
  TckNo: string;
  constructor(private studentService: StudentService, private router: Router) {
    this.students = this.studentService.getAll('');
  }

  ngOnInit() {
  }
  startSearch() {
    this.searchByNationalId(this.TckNo);
  }

  searchByNationalId(id: string) {
    this.students = this.studentService.getAll(id);
  }
  edit(id: string) {
    this.router.navigate(['/studentedit'],
      { queryParams: { 'id': id } });
  }
  openStudentAdd(){
    this.router.navigate(["/studentadd"]);
  }
  onKey(event:KeyboardEvent){
    this.searchByNationalId(this.TckNo);
  }
  deleteStudent(id:string){
    this.studentService.deleteStudent(id);
  }
}
