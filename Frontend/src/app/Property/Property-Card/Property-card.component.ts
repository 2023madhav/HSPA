import { Component, Input } from "@angular/core";
import { Iproperty } from "../Iproperty.interface";

@Component({
  selector:'app-property-card',
  //template:'<h1>I am card</h1>',
  templateUrl:'Property-card.component.html',
 // styles:['h1{font-weight:normal;}']
 styleUrls:['Property-cardcomponent.css']
})
export class PropertyCardComponent{
  @Input() property : Iproperty;

}
