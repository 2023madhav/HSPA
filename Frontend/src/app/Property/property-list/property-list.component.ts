import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit  {

  properties: Array<any> = [
    {
    "Id":1,
    "name":"Birla House",
    "Type":"House",
    "price":120000
    },
    {
      "Id":2,
      "name":"Ambani House",
      "Type":"House",
      "price":130000
      },
      {
        "Id":3,
        "name":"TATA House",
        "Type":"House",
        "price":160000
        },
        {
          "Id":4,
          "name":"Honda House",
          "Type":"House",
          "price":170000
          }
]
    constructor(){

    }
    ngOnInit(): void{

    }



}
