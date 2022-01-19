import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  public constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Tutorial')
  }

}
