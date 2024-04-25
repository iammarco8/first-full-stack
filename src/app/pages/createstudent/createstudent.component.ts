import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']


})
export class CreateStudentComponent {

  constructor(private studentService:StudentService){}
  student:any = {};
  students:any[] = [];
  ths:any={};
  these:any = [];

  movie:any ={};
  movies:any[] = [];
  
  addMovie(){
    this.movies.push({...this.movie});
    this.movie = {};
  }
    
  ngOnInit():void{
    // not sure why this is here and what function it serves
  }


  
  studentlist(){
    this.students.push({...this.student});
    this.student={};
    // console.log(this.students)
  }

  // makeStudents(){
  //   this.studentService.createStudents().subscribe( res=> {
  //     console.log(res['status']);
  //     this.student= res['data']['students'];
  //   });
  // }
};
