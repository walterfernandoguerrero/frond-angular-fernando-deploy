import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Datos } from 'src/app/model/datos';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
datos: any= new Datos('','');
  constructor(private servDatos: DatosService, private activatedRouter: ActivatedRoute, 
  private router:Router) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.servDatos.detail(id).subscribe(
      data =>{
        this.datos=data;
        console.log(data);
      }, err =>{
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onCreate():void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.servDatos.detail(id).subscribe(
      data =>{
        this.datos=data;
      }
    )
      this.servDatos.save(this.datos).subscribe(
        data =>{
          alert('DATOS Editados');
          this.router.navigate(['']);
        }
      )
  }

}
