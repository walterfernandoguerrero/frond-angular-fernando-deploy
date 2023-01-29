import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datos } from '../model/datos';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  URL='http://localhost:8080/walter/'

  constructor(private httpClient: HttpClient) { }

  //metodos

  //traer lista
  public lista():Observable<Datos[]>{
    return this.httpClient.get<Datos[]>(this.URL+'verDatos')
  }

  //crear datos
 public save(datos: Datos):Observable<any>{
   return this.httpClient.post<any>(this.URL+'nuevodato', datos);
 }

 //borrar datos
 public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL+`delete/${id}`);
 }

 //traer un registro
 public detail(id: number):Observable<Datos>{
    return this.httpClient.get<Datos>(this.URL+`traerUnDato/${id}`);
 }
}
