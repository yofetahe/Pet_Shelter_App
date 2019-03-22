import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/api/pets');
  }
  getById(id: string){
    return this._http.get(`/api/pets/${id}`);
  }
  addContent(data: any){
    data.name = data.name.charAt(0).toUpperCase( ) + data.name.substring(1).toLowerCase( );
    data.type = data.type.charAt(0).toUpperCase( ) + data.type.substring(1).toLowerCase( );
    return this._http.post('/api/pets', data);
  }
  updateContentById(id: string, data: any){
    return this._http.put(`/api/pets/${id}`, data);
  }
  deleteContentById(id: string){
    return this._http.delete(`/api/pets/${id}`);
  }
  validatePetInfo(data: any){
    data.name = data.name.charAt(0).toUpperCase( ) + data.name.substring(1).toLowerCase( );
    return this._http.get(`/api/pets/check/${data.name}`);
  }
}
