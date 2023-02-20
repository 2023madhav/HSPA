import { HttpClient } from '@angular/common/http';
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
      "name":"Bani House",
      "Type":"House",
      "price":130000
      },
      {
        "Id":3,
        "name":"Tata House",
        "Type":"House",
        "price":160000
        },
        {
          "Id":4,
          "name":"Rai House",
          "Type":"House",
          "price":170000
          },
          {
            "Id":5,
            "name":"Rank Villa",
            "Type":"Villa",
            "price":170000
            },
            {
              "Id":5,
              "name":"Raj palace",
              "Type":"Palacee",
              "price":170000
              },
              {
                "Id":4,
                "name":"Surya palace",
                "Type":"Palace",
                "price":170000
                }

]
    constructor(private http:HttpClient){

    }
    ngOnInit(): void{
      this.http.get('data/properties.json').subscribe(
        data=>console.log(data)
      );
    }



}
