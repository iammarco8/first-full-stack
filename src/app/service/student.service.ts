import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // use the server port here
  API_URL = 'http://localhost:8080/api/v1/students';
  // private API_URL = 'http://localhost:8080/api/v1/students';


  constructor(private _http:HttpClient) { }

  getAllStudents():Observable<any> {
    return this._http.get<any>(this.API_URL +'/all-students')
    .pipe(
      map((res)=>{
        console.log(res);
        return res;
        
      })
    );
  }
  getSingleStudent(id: number):Observable<any>{
    return this._http.get<any>(this.API_URL+`/single-students/${id}`)
  }


  // createStudents():Observable<any> {
  //   return this._http.post<any>(this.API_URL +'/new-students')
  //   .pipe(
  //     map((res)=>{
  //       console.log(res);
  //       return res;
        
  //     })
  //   );
  // }
}
