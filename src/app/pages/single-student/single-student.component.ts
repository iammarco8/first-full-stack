import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent {
  constructor(private studentService:StudentService){}

  students:any= {};


  display(id){
    this.studentService.getSingleStudent(id).subscribe(res =>{
      this.students = res['data'] ['student']

    });
  }

}
