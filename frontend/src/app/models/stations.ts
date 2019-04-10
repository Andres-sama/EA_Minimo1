import { Bikes } from './bikes';
export class Stations {
    _id: string;
    name: string;
    state: String;
    bikes:Bikes[];  
    description:string;

    constructor(_id='',name ='', state ='',bikes =Bikes[""],description =''){
        this._id = _id;
        this.name = name;
        this.state = state;
        this.bikes = bikes;
        this.description = description;
    }
}