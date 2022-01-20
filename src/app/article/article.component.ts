import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from '../shared/models/product.model';
import { Multiservice } from '../shared/services/multi.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  product : Product|undefined;

  public constructor(private titleService: Title, private multiServices : Multiservice) {
   }

  ngOnInit(): void {
    this.titleService.setTitle('Article')
    this.product = this.multiServices.getProduct();
  }

  addProductOnProject(product : Product){
    this.multiServices.addProductOnUpdatedProject(product);
  }

}
