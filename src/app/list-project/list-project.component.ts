import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  listProjects : string[][];
  listOldProjects: string[][];

  public constructor(private titleService: Title) {
    this.listProjects =[
      ['Salle de bain', '1000€'],
      ['Terrasse', '2400€']
    ]

    this.listOldProjects =[
      ['Cuisine', '2000€'],
      ['Chambre d\'ami', '3000€']
    ]
   }

  ngOnInit(): void {
    this.titleService.setTitle('List project')
  }

}
