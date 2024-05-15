export class Project {
    public title:string;
    public description: string;
    public techs: string;
    public photo: string

    constructor(title:string, description:string, techs:string, photo:string){
        this.title = title;
        this.description = description;
        this.techs = techs; 
        this.photo = photo
    }
}
