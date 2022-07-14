import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseURL = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  get_list(entity) {
    return this.http.get(this.baseURL + '/' + entity);
  }

  get(entity, id) {
    return this.http.get(this.baseURL + '/' + entity + '/' + id);
  }

}
