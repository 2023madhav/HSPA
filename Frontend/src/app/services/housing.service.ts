import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,Observable } from 'rxjs';
import {Iproperty} from 'src/app/Property/Iproperty.interface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  // getAllproperties(): Observable<Iproperty[]>{
  //   return this.http.get('assets/properties.json').pipe(
  //     map(data =>{
  //           const propertyarry: Array<Iproperty> = [];

  //           for(const Id in data)
  //           {
  //             if(data.hasOwnProperty(Id))
  //             {
  //             propertyarry.push(data[Id] );
  //              console.log(Id)
  //             }
  //           }
  //           console.log(data);
  //           return propertyarry;
  //     })
  //   );
  // }

  public getAllProperties1(): Observable<Iproperty[]> {
    return this.http
      .get('assets/properties.json')
      .pipe(
        map(data => data as Iproperty[])
      );
}
}
