import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from '../shared/models/product.model';
import { Project } from '../shared/models/project.model';
import { Multiservice } from '../shared/services/multi.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project : Project;
  listBuy: Product[]|undefined;
  totalProduct: number;
  totalBuy: number;
  remainingBudget : number|undefined
  product: Product|undefined;


  public constructor(private titleService: Title, private multiservices: Multiservice, private router: Router) {
    this.project = multiservices.project;
    this.totalProduct = 0;
    this.totalBuy = 0;
    if(this.project.budget != undefined) this.remainingBudget = this.project.budget - this.totalBuy;
    this.remainingBudget = this.project.budget;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Project')

    this.project.listProduct?.forEach(product => {
      if(!product.isBuy) this.totalProduct = this.totalProduct + product.price;
      if(product.isBuy) this.totalBuy = this.totalBuy + product.price;
    });
  }

  setUpdatedProject(){
    if(this.project != undefined) this.multiservices.setUpdatedProject(this.project)
  }

  addProductToBuy(addedProduct: Product){
    this.multiservices.addProductToBuy(addedProduct);
    this.totalBuy = this.totalBuy + addedProduct.price;
    this.totalProduct = this.totalProduct - addedProduct.price;
    if(this.project.budget != undefined) this.remainingBudget = this.project.budget - this.totalBuy;
  }

  goOnTuto(){
    this.router.navigate(['/tutorial'])
  }

  changeBudget(event : any){
    console.log(event.value)
  }

}
