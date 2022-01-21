import { Product } from "./product.model";
import { Tutorial } from "./tutorial.model";

export class Project{
    id: number|undefined;
    name : string|undefined;
    budget : number|undefined;
    listProduct : Product[]|undefined;
    listTuto : Tutorial[]|undefined;
    isFinished: boolean|undefined;

    constructor(id?: number, name?: string, budget?: number, listProduct?: Product[], listTuto?: Tutorial[], isFinished?: boolean){
        this.id = id;
        this.name = name;
        this.budget = budget;
        this.listProduct = listProduct;
        this.listTuto = listTuto;
        this.isFinished = isFinished;
    }

}