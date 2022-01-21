import { Product } from "./product.model";
import { Tutorial } from "./tutorial.model";

export class Project{
    id: number|undefined;
    name : string|undefined;
    budget : number|undefined;
    products : Product[]|undefined;
    tutorials : Tutorial[]|undefined;
    isFinished: boolean|undefined;

    constructor(id?: number, name?: string, budget?: number, products?: Product[], tutorials?: Tutorial[], isFinished?: boolean){
        this.id = id;
        this.name = name;
        this.budget = budget;
        this.products = products;
        this.tutorials = tutorials;
        this.isFinished = isFinished;
    }

}