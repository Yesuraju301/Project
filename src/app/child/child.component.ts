import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
childTable : any = [];
  constructor(public infoService:InfoService) { }

  ngOnInit(): void {

    this.childTable =  this.infoService.getInfo()
  }

  remove(i:any){
   
    this.valueChange.emit(this.childTable[i]);
    this.childTable.splice(0,1);
  }

}
