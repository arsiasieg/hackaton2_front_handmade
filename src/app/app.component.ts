import { Component, OnInit } from '@angular/core';
import { Project } from './shared/models/project.model';
import { Multiservice } from './shared/services/multi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mano spies';
  project: Project;

  constructor(private multiServices: Multiservice){
    this.project = this.multiServices.getUpdatedProject()
  }

  ngOnInit(): void {

  }
  
}
