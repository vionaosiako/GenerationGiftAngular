import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  providers:[TrainingService]
})

export class TrainingComponent implements OnInit {
  image_url= "https://res.cloudinary.com/dhvcmzuzw/"
  selectedTraining;
  trainings=[{id:1}, {title:'test'}, {poster:'poster'},{description:'description'},{venue:'venue'},{category:'category'},{eventdate:'eventdate'},{eventtime:'eventtime'},{user:'user'}];
  
  constructor(private api:TrainingService) { 
    this.getTrainings();
    this.selectedTraining = {id:-1, poster:'',title:'',description:'',venue:'',category:'',eventdate:'',eventtime:''};
  }

  ngOnInit(): void {
    this.getTrainings()
  }

  getTrainings=() =>{
    this.api.getTrainings().subscribe(
      data => {
        this.trainings =data
      },
      error => {
        console.log(error)
      }
    )
  }

  
  trainingClicked = (training:any) => {
    this.api.getOneTraining(training.id).subscribe(
      data => {
        this.selectedTraining = data;
      },
      error => {
        console.log(error);
      }
    );
    // console.log(training.id)
  }

  putTraining = () => {
    this.api.updateTraning(this.selectedTraining).subscribe(
      data => {
        this.getTrainings();
      },
      error => {
        console.log(error);
      }
    );
  }
  newTraining = () => {
    this.api.createTraining(this.selectedTraining).subscribe(
      data => {
        this.trainings.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteTraining = () => {
    this.api.deleteTraining(this.selectedTraining.id).subscribe(
      data => {
        this.getTrainings();
      },
      error => {
        console.log(error);
      }
    );
  }

  // getTrainings(): void{
  //   this.trainingService.getTrainings().subscribe
  //   (training => {this.trainings=this.trainings})
  //   console.log(this.trainings)
  // }

}
