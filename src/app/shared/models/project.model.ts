import { Product } from "./product.model";
import { Tutorial } from "./tutorial.model";

export class Project{
    name : string|undefined;
    budget : number|undefined;
    listProduct : Product[]|undefined;
    listTuto : Tutorial[]|undefined;
    isFinished: boolean|undefined;

    constructor(name?: string, budget?: number, listProduct?: Product[], listTuto?: Tutorial[], isFinished?: boolean){
        this.name = name;
        this.budget = budget;
        this.listProduct = listProduct;
        this.listTuto = listTuto;
        this.isFinished = isFinished;
    }

}