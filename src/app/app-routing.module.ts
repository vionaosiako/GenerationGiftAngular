import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { TrainingComponent } from './components/training/training.component';
import { ProjectPitchComponent } from './components/project-pitch/project-pitch.component';
import { DonationComponent } from './components/donation/donation.component';
import { EmploymentComponent } from './components/employment/employment.component';


const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'project-pitch', component: ProjectPitchComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'job', component: EmploymentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
