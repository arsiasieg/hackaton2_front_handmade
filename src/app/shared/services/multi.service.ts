import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Project } from '../models/project.model';
import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class Multiservice {
  listProject : Project[];
  listProduct : Product[];
  product: Product|undefined;
  project: Project;
  projectToUpdated : Project;
  tutorial: Tutorial;

  constructor() {
    this.listProduct = [
      new Product('Salon de jardin', 499, 'article1.png', false),
      new Product('Lame de terrasse bois', 21.90, 'article2.png', false),
      new Product('Lot de 1000 Vis Terrasse', 63.85, 'article3.png', false),
      new Product('Perceuse visseuse percussion 18V', 253.08, 'article4.png', false),
      new Product('Panneau de construction 1250x600x30 mm', 18.90, 'article5.png', false),
      new Product('Pommeau de Douche Chromé', 19.79, 'article6.png', false),
      new Product('Paroi de douche à l\'italienne', 259, 'article7.png', false),
      new Product('Bac de douche SMC Noir 120x70 cm', 152.99, 'article8.png', false),
    ];

    this.listProject = [
      new Project('Salle de bain', 8000, [], [], false),
      new Project('Terrasse', 3000, [], [], false),
      new Project('Cuisine', 12000, [], [], true),
    ]

    this.projectToUpdated = this.listProject[0];
    this.tutorial = new Tutorial("Comment choisir une barre et des anneaux pour rideau de douche", 3, 'bathroom.png');
    this.project = new Project();
   }

   //PRODUCT
   getProduct(){
     return this.product;
   }
   setProduct(product : Product){
      this.product = product;
   }

   addProductOnUpdatedProject(product: Product){
    this.projectToUpdated.listProduct?.push(product);
   }

   addProductToBuy(addedProduct: Product){
    this.projectToUpdated.listProduct?.forEach(product => {
      if(product.name == addedProduct.name){
        product.isBuy = !product.isBuy;
      }
    });
  }

   //PROJECT
   getProject(){
     return this.project;
   }

   setProject(project: Project){
      this.project.name = project.name;
      this.project.budget = project.budget;
      this.project.listTuto = project.listTuto;
      this.project.listProduct = project.listProduct;
      this.project.isFinished = project.isFinished;
      this.setUpdatedProject(this.project);
   }

   getUpdatedProject(){
     return this.projectToUpdated;
   }

   setUpdatedProject(project: Project){
     this.projectToUpdated = project;
   }

   deleteProject(){
     this.listProject = this.listProject.filter(project => project.name != this.projectToUpdated.name)
   }

   disconnectProject(){
    this.project.name = undefined;
    this.project.budget = undefined;
    this.project.listTuto = undefined;
    this.project.listProduct = undefined;
    this.project.isFinished = undefined;
   }

     //TUTORIAL
   addTuto(){
     this.project?.listTuto?.push(this.tutorial)
   }
   
}
