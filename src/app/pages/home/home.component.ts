import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private studentService: StudentService){}
  students = [];
  ngOnInit(): void {
    
  }

  fetchStudents(){
    this.studentService.getAllStudents().subscribe( res =>{
      
      console.log(res['status']);
      this.students= res['data'] ['students'];
    });
  }
}
