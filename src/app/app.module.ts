import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

import {HttpClientModule} from '@angular/common/http';
import { CreateStudentComponent } from './pages/createstudent/createstudent.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UpdatestudentComponent } from './pages/updatestudent/updatestudent.component';
import { DeletestudentconfirmComponent } from './pages/deletestudentconfirm/deletestudentconfirm.component';
import { SingleStudentComponent } from './pages/single-student/single-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CreateStudentComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    UpdatestudentComponent,
    DeletestudentconfirmComponent,
    SingleStudentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
