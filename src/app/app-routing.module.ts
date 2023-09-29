import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { ListaDeCategoriasComponent } from './views/categoria/lista-de-categorias/lista-de-categorias.component';
import { ListaDePlatillosComponent } from './views/platillo/lista-de-platillos/lista-de-platillos.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'categorias', component: ListaDeCategoriasComponent },
  { path: 'platillos', component:ListaDePlatillosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
