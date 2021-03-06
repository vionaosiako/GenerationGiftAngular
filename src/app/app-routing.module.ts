import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { TrainingComponent } from './components/training/training.component';
import { ProjectPitchComponent } from './components/project-pitch/project-pitch.component';
import { DonationComponent } from './components/donation/donation.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: 'home', component:BannerComponent},
  { path: 'aboutus', component: AboutusComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'pitch', component: ProjectPitchComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'job', component: EmploymentComponent },
  { path: '', component: LoginComponent },
  { path: 'registration', component:RegistrationComponent},
  { path: 'users', component: UsersComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
