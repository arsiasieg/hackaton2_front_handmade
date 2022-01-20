export class Product{
    name : string;
    price : number;
    image : string;
    isBuy : boolean;

    constructor(name: string, price: number, image: string, isBuy: boolean){
        this.name = name;
        this.price = price;
        this.image = image;
        this.isBuy = isBuy;
    }
}