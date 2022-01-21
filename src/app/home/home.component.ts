import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Product } from '../shared/models/product.model';
import { Multiservice } from '../shared/services/multi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProducts : Product[];
  leftNavDisabled: boolean;
  rightNavDisabled: boolean;
  index: number;

  @ViewChild('nav', { read: DragScrollComponent, static: true }) ds: DragScrollComponent|undefined;

  public constructor(private titleService: Title, private multiServices : Multiservice, private router : Router) {
    this.listProducts = [];
    
    this.multiServices.getAllProduct().subscribe((listProduct: any) => {
      this.listProducts = listProduct;
    })

    this.leftNavDisabled = false;
    this.rightNavDisabled = false;
    this.index = 0;
   }

  ngOnInit(): void {
    this.titleService.setTitle('Home')
  }

  showArticle(product: Product){
    this.multiServices.setProduct(product);
    this.router.navigate(['/article'])
  }

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
  }

}
