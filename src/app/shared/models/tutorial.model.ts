export class Tutorial {
    id: number;
    title : string;
    difficulty : number;
    image : string;

    constructor(id: number, title: string, difficulty: number, image: string){
        this.id = id;
        this.title = title;
        this.difficulty = difficulty;
        this.image = image;
    }
}