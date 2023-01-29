import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datos } from 'src/app/model/datos';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  nombre: string='';
  apellido: string='';

  constructor(private router: Router, private servDatos: DatosService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const datos=new Datos(this.nombre, this.apellido);
    this.servDatos.save(datos).subscribe(
      data =>{
        alert("datos agregados");
        this.router.navigate(['']);
      }
    )
  }
  
}
