import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Multiservice } from '../shared/services/multi.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  public constructor(private titleService: Title, private multiServices:Multiservice) { }

  ngOnInit(): void {
    this.titleService.setTitle('Tutorial')
  }

  addTuto(){
    this.multiServices.addTuto();
  }
}
