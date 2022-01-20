import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models/project.model';
import { Multiservice } from '../shared/services/multi.service';

@Component({
  selector: 'app-green-banner',
  templateUrl: './green-banner.component.html',
  styleUrls: ['./green-banner.component.css']
})
export class GreenBannerComponent implements OnInit {
  project : Project;
  remainingBudget : number|undefined;

  constructor(private multiServices:Multiservice) {
    this.project = multiServices.getUpdatedProject();
    if(this.project.budget != undefined) this.remainingBudget = this.multiServices.getRemainingBudget();
   }

  ngOnInit(): void {
    if(this.project.budget != undefined) this.remainingBudget = this.multiServices.getRemainingBudget();
  }

  disconnectUpdatedProject(){
    this.multiServices.disconnectUpdatedProject();
  }

}
