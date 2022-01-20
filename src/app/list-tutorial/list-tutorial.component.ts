import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-tutorial',
  templateUrl: './list-tutorial.component.html',
  styleUrls: ['./list-tutorial.component.css']
})
export class ListTutorialComponent implements OnInit {

 

  public constructor(private titleService: Title) { 
    
  }

  ngOnInit(): void {
    this.titleService.setTitle('List tutorial')
    
  }

}
