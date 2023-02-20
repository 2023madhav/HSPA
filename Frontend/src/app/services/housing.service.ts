import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllproperties(){
    return this.http.get('assets/properties.json');
  }
}
