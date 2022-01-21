import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  remainingBudget: number|undefined;
  api : string;
  observable : Observable<any>|undefined

  constructor(private http: HttpClient) {
    this.api = "http://localhost:8080/";
    this.listProduct = [];
    this.listProject = [];
    // this.listProduct = [
    //   new Product('Salon de jardin', 499, 'article1.png', false),
    //   new Product('Lame de terrasse bois', 21.90, 'article2.png', false),
    //   new Product('Lot de 1000 Vis Terrasse', 63.85, 'article3.png', false),
    //   new Product('Perceuse visseuse percussion 18V', 253.08, 'article4.png', false),
    //   new Product('Panneau de construction 1250x600x30 mm', 18.90, 'article5.png', false),
    //   new Product('Pommeau de Douche Chromé', 19.79, 'article6.png', false),
    //   new Product('Paroi de douche à l\'italienne', 259, 'article7.png', false),
    //   new Product('Bac de douche SMC Noir 120x70 cm', 152.99, 'article8.png', false),
    // ];

    // this.listProject = [
    //   new Project('Salle de bain', 8000, [], [], false),
    //   new Project('Terrasse', 3000, [], [], false),
    //   new Project('Cuisine', 12000, [], [], true),
    // ]

    
    this.tutorial = new Tutorial("Comment choisir une barre et des anneaux pour rideau de douche", 3, 'bathroom.png');
    this.project = new Project();
    this.projectToUpdated = new Project();
    this.remainingBudget = 0;
   }



   //PRODUCT
   public getAllProduct(): Observable<any>{
    return this.http.get<any>(this.api+"products")
  }
  
  getProduct(){
    return this.product
  }
  
   setProduct(product : Product){
      this.product = product;
   }

   addProductOnUpdatedProject(product: Product){
     console.log(this.projectToUpdated)
    this.projectToUpdated.listProduct?.push(product);
    this.observable = this.http.put<any>(this.api+"projets/" + this.projectToUpdated.id, this.projectToUpdated)

    this.observable.subscribe((project : Project)=>{
      console.log(project)
    })

    if(this.remainingBudget != undefined) this.setRemainingBudget(this.remainingBudget - product.price)
   }

   addProductToBuy(addedProduct: Product){
    this.projectToUpdated.listProduct?.forEach(product => {
      if(product.name == addedProduct.name){
        product.isBuy = !product.isBuy;
      }
    });
  }

   //PROJECT
   public getAllProject(): Observable<any>{
    return this.http.get<any>(this.api+"projets")
  }

   getProject(){
    return this.project;
  }

  getProjectId(id:number){
    this.observable = this.http.get<any>(this.api+"projets/"+id)
    this.observable.subscribe((project: Project) => {
      this.setProject(project)
    })
  }

   setProject(project: Project){
      this.project.id = project.id
      this.project.name = project.name;
      this.project.budget = project.budget;
      this.project.listTuto = project.listTuto;
      this.project.listProduct = project.listProduct;
      this.project.isFinished = project.isFinished;
      this.setRemainingBudget(project.budget);
   }

   deleteProject(id: number){
    return this.http.delete<any>(this.api+"projets/"+id, )
   }

   getUpdatedProject(){
    return this.projectToUpdated;
  }

  setUpdatedProject(project: Project){
    this.projectToUpdated.id = project.id
   this.projectToUpdated.name = project.name;
   this.projectToUpdated.budget = project.budget;
   this.projectToUpdated.listTuto = project.listTuto;
   this.projectToUpdated.listProduct = project.listProduct;
   this.projectToUpdated.isFinished = project.isFinished;

  }

   disconnectUpdatedProject(){
    this.projectToUpdated.name = undefined;
    this.projectToUpdated.budget = undefined;
    this.projectToUpdated.listTuto = undefined;
    this.projectToUpdated.listProduct = undefined;
    this.projectToUpdated.isFinished = undefined;
   }

   getRemainingBudget(){
     return this.remainingBudget;
   }

   setRemainingBudget(budget: number|undefined){
     this.remainingBudget = budget;
   }


     //TUTORIAL
    getAllTuto(): Observable<any>{
      return this.http.get<any>(this.api+"tutorials")
    }

   addTuto(){
     this.project?.listTuto?.push(this.tutorial)
   }
   
}
