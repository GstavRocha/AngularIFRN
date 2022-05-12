
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any>{
     const url = 'https://reqres.in/api/users?per_page=20?'
     return this.http.get(url);
  }
}
