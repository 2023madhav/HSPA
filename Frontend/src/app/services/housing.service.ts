import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import {Iproperty} from 'src/app/Property/Iproperty.interface.ts';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllproperties(){
    return this.http.get('assets/properties.json').pipe(
      map(data =>{
            const propertyarry: Array<Iproperty> = [];

            for(const id in data)
            {
              if(data.hasOwnProperty(id))
              {
                propertyarry.push(data[id] );
              }
            }
            return propertyarry;
      })
    );
  }
}
