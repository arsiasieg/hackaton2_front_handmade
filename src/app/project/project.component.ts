import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Project')
  }

}
