import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Students } from '../models/student-data.model';
import { Lesson } from '../models/lesson.model';

@Injectable()
export class StudentService {
  constructor() { }
  getStudent(id: string) {
    for (let ogrenci of Students) {
      if (ogrenci.NationalId == id)
        return ogrenci;
    }
  }
  getAll(id: string): Array<Student> {
    if (id.length === 0) {
      return Students;
    }
    else {
      const newStudents: Array<Student> = [];
      for (const ogrenci of Students) {
        if (ogrenci.NationalId.startsWith(id))
          newStudents.push(ogrenci);
      }
      return newStudents;
    }
  }
  addStudent(student: Student) {
    Students.push(student);
  }
  updateStudent(studentUpdate: Student) {
    for (let ogrenci of Students) {
      if (ogrenci.NationalId === studentUpdate.NationalId) {
        ogrenci.Name = studentUpdate.Name;
        ogrenci.Surname = studentUpdate.Surname;
      }
    }
  }
  addLesson(student:Student) {
    for (let ogrenci of Students) {
      if (ogrenci.NationalId === student.NationalId) {
        ogrenci.Lessons=student.Lessons;
      }
    }
  }
  deleteStudent(id:string){
    for(let ogrenci of Students){
      if(ogrenci.NationalId===id){
        const index=Students.indexOf(ogrenci);
        Students.splice(index,1);
      }
    }
  }
}
