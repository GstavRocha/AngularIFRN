import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]>{
    const url = 'https://reqres.in/api/users?per_page=20';
    return this.http.get<Usuario[]>(url).pipe(
      map((retorno: any) => retorno.data)
    );
  }

  getById(id: number): Observable<Usuario>{
    const url = `https://reqres.in/api/users/${id}`;
    return this.http.get<Usuario>(url).pipe(
      map((retorno: any) => retorno.data)
    );
  }
}
