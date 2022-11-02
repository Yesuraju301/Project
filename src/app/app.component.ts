import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoService } from './info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userInfo :any = [];
  url:string = "https://jsonplaceholder.typicode.com/photos"

  constructor(private httpClient: HttpClient,public infoService:InfoService){

  }
  ngOnInit(): void {
 this.getDetails().subscribe((res:any)=>{
  console.log(res);

this.userInfo = res.slice(0,20);
    });
    
  }

  getDetails(){
    return this.httpClient.get(this.url);

  }
  compare(i:number){
    this.infoService.setInfo(this.userInfo[i]);
    this.userInfo.splice(i,1);

  }
  updatedValue(data:any){
    this.userInfo.push(data);

  }

}
