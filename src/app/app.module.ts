import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingComponent } from './components/training/training.component';
import { DonationComponent } from './components/donation/donation.component';
import { ProjectPitchComponent } from './components/project-pitch/project-pitch.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    DonationComponent,
    ProjectPitchComponent,
    EmploymentComponent,
    AboutusComponent,
    NavbarComponent,
    BannerComponent,
    RegistrationComponent,
    LoginComponent,
    FooterComponent,
    UsersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
