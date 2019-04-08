export class Stations {
    _id: string;
    name: string;
    bikes:string;  
    description:string;

    constructor(_id='',name ='', bikes ='',description =''){
        this._id = _id;
        this.name = name;
        this.bikes = bikes;
        this.description = description;
    }
}