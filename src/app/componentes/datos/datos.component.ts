import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/model/datos';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  //traer la clase
  dato: Datos[]=[];
  constructor(private servDatos: DatosService) { }

  ngOnInit(): void {
    //llamar un metodo
    this.cargarDatos();
  }
  //carga la tabla
  cargarDatos():void{
    this.servDatos.lista().subscribe(data =>{this.dato=data;});
  }

  //eliminar registros
  borrar(id?: number){
    if(id != undefined){
      this.servDatos.delete(id).subscribe(
        data =>{
          this.cargarDatos();
        }, err =>{
          alert("falla de elininacion");
        }
      )
    }

  }
}
