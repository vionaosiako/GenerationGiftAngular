import { Component, OnInit } from '@angular/core';
import { ProjectpitchService } from 'src/app/services/projectpitch.service';
@Component({
  selector: 'app-project-pitch',
  templateUrl: './project-pitch.component.html',
  styleUrls: ['./project-pitch.component.css']
})
export class ProjectPitchComponent implements OnInit {
  selectedPitch;
  projectPitches = [
    { id: 1 },
    { title: 'Test' },
    { description: 'Test description' },
    { total_cost: 1000 },
    { mpesa_no: '0712345678' },
  ];
  constructor(private api: ProjectpitchService) {
    this.getPitches();
    this.selectedPitch = {id:-1,title:'', description:'',total_cost:'',mpesa_no:''};
  }

  ngOnInit(): void {
    this.getPitches();
  }

  getPitches = () => {
    this.api.getPitches().subscribe(
      (data) => {
        this.projectPitches = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  PitchesClicked = (pitch:any) => {
    this.api.getOnePitch(pitch.id).subscribe(
      data => {
        this.selectedPitch = data;
      },
      error => {
        console.log(error);
      }
    );
    // console.log(training.id)
  }

  putPitch = () => {
    this.api.updatePitch(this.selectedPitch).subscribe(
      data => {
        this.getPitches();
      },
      error => {
        console.log(error);
      }
    );
  }
  newPitch = () => {
    this.api.createPitch(this.selectedPitch).subscribe(
      data => {
        this.projectPitches.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deletePitch = () => {
    this.api.deletePitch(this.selectedPitch.id).subscribe(
      data => {
        this.getPitches();
      },
      error => {
        console.log(error);
      }
    );
  }

}
