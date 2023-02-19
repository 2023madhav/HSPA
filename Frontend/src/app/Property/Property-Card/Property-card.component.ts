import { Component } from "@angular/core";

@Component({
  selector:'app-property-card',
  //template:'<h1>I am card</h1>',
  templateUrl:'Property-card.component.html',
 // styles:['h1{font-weight:normal;}']
 styleUrls:['Property-cardcomponent.css']
})
export class PropertyCardComponent{

  property:any={
    "Id":1,
    "name":"Birla House",
    "Type":"House",
    "price":120000

  }
}
