export class Project {
    public title:string;
    public description: string;
    public techs: string;
    public photo: string
    public link: string

    constructor(title:string, description:string, techs:string, photo:string, link:string){
        this.title = title;
        this.description = description;
        this.techs = techs; 
        this.photo = photo;
        this.link = link

    }
}
