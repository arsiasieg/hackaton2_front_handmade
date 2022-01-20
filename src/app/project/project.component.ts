import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  listProduct : string[][]
  listBuy: string[][];
  listTuto: string[][];
  totalProduct: number|undefined;
  totalBuy: number|undefined;


  public constructor(private titleService: Title) {
    this.listProduct = [
      ['Pommeau de douche', '20€', 'x1'],
      ['Receveur de douche', '150€', 'x1'],
    ];

    this.listTuto = [
      ['Poser une paroi de douche', '3'],
      ['Poser un receveur de douche', '2']
    ];

    this.listBuy = [
      ['Paroi de douche', '260€', 'x1'],
      ['Carrelage de douche', '19€', 'x1']
    ]
   }

  ngOnInit(): void {
    this.titleService.setTitle('Project')
  }

}
