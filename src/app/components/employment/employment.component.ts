import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
  providers:[JobService]

})
export class EmploymentComponent implements OnInit {
  selectedJob;
  jobs = [
    { id: 1 },
    { job_title: 'Test' },
    { description: 'Test description' },
    { date_posted: '1000' },
    { category: 'white' },
    { location: 'here' },
    { approximate_salary: 1000 },
    { deadline: 'deadline' },
    { user: 1000 }
  ];
  constructor(private api: JobService) {
    this.getJobs();
    this.selectedJob = {id:-1,job_title:'', description:'',date_posted:'',category:'',location:'',approximate_salary:'',deadline:'',user:''};
  }

  ngOnInit(): void {
    this.getJobs();

  }
  getJobs = () => {
    this.api.getJobs().subscribe(
      (data) => {
        this.jobs = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  jobClicked = (job:any) => {
    this.api.getOneJob(job.id).subscribe(
      data => {
        this.selectedJob = data;
      },
      error => {
        console.log(error);
      }
    );
    // console.log(training.id)
  }
  putJob = () => {
    this.api.updateJob(this.selectedJob).subscribe(
      data => {
        this.getJobs();
      },
      error => {
        console.log(error);
      }
    );
  }
  newJob = () => {
    this.api.createJob(this.selectedJob).subscribe(
      data => {
        this.jobs.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteJob = () => {
    this.api.deleteJob(this.selectedJob.id).subscribe(
      data => {
        this.getJobs();
      },
      error => {
        console.log(error);
      }
    );
  }


}
