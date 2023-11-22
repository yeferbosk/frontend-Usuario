import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  //URL de la api, obtiene el listado de los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/usuarios";
  
  constructor(private httpClient : HttpClient) { }

  //Este metodo tiene la funcion de obtener los elmentos de la baseURL
  obtenerListaDeUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }
}
