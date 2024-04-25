import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateStudentComponent } from './pages/createstudent/createstudent.component';
import { UpdatestudentComponent } from './pages/updatestudent/updatestudent.component';
import { DeletestudentconfirmComponent } from './pages/deletestudentconfirm/deletestudentconfirm.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleStudentComponent } from './pages/single-student/single-student.component';

const routes: Routes = [
  {path:'home',title: 'home',component:HomeComponent,pathMatch:'full'},
  {path:'about',title: 'about',component:AboutComponent},
  {path:'create',title: 'create',component:CreateStudentComponent},
  {path:'update', title: 'update', component:UpdatestudentComponent},
  {path:'delete', title: 'delete', component:DeletestudentconfirmComponent},
  {path:'single/:id',title: 'id', component:SingleStudentComponent},
  {path:'',redirectTo: '/home', pathMatch:'full'},
  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
