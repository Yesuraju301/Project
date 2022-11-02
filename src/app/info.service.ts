import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  childData : any = [];

  constructor() { }


  getInfo(){
    return this.childData;

  }

  setInfo(data:any){
    this.childData.push(data);
    
  }
}
