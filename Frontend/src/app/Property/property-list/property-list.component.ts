import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import {Iproperty} from 'src/app/Property/Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit  {

  properties: Array<Iproperty> = [];
    constructor(private husingsrv:HousingService){

    }
    ngOnInit(): void{

      this.husingsrv.getAllProperties1().subscribe(
        data=>
        {
          console.log(data);
          this.properties=data;
         },error =>{
          console.log('httperror');
          console.log(error);
         }
        );


    }



}
