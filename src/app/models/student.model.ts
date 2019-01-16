import { Lesson } from "./lesson.model";

export class Student{
    NationalId:string;
    SchoolId:string;
    Name:string;
    Surname:string;
    Lessons:Array<Lesson>;
}