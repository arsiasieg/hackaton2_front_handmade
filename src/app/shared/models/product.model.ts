export class Product{
    id: number;
    name : string;
    price : number;
    image : string;
    isBuy : boolean;

    constructor(id: number, name: string, price: number, image: string, isBuy: boolean){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.isBuy = isBuy;
    }
}