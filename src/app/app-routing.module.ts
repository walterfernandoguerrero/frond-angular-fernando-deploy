import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';

const routes: Routes = [
{path:'', component : DatosComponent},
{path: 'pagAgregar', component: AgregarComponent},
{path: 'pagModificar/:id', component: ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
