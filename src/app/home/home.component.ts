import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listArticles : string[];

  public constructor(private titleService: Title) {
    this.listArticles = [
      'article1.png',
      'article2.png',
      'article3.png',
      'article4.png',
      'article5.png',
      'article6.png',
      'article7.png',
      'article8.png',
    ];
   }

  ngOnInit(): void {
    this.titleService.setTitle('Home')
  }

  leftNavDisabled = false;
  rightNavDisabled = false;
  index = 0;

  @ViewChild('nav', { read: DragScrollComponent, static: true }) ds: DragScrollComponent|undefined;


  moveLeft() {
    if(this.ds != undefined)
    this.ds.moveLeft();
  }

  moveRight() {
    if(this.ds != undefined)
    this.ds.moveRight();
  }

  moveTo(idx: number) {
    if(this.ds != undefined)
    this.ds.moveTo(idx);
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

  onIndexChanged(idx : number) {
    this.index = idx;
    console.log('current index: ' + idx);
  }

}
