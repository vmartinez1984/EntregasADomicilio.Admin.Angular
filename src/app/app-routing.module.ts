import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { ListaDeCategoriasComponent } from './views/categoria/lista-de-categorias/lista-de-categorias.component';
import { ListaDePlatillosComponent } from './views/platillo/lista-de-platillos/lista-de-platillos.component';
import { InicioDeSesionComponent } from './authorize/inicio-de-sesion/inicio-de-sesion.component';
import { Guardian } from './guardian';
import { ListaDeUsuariosComponent } from './views/usuario/lista-de-usuarios/lista-de-usuarios.component';
import { ListaDePedidosComponent } from './views/pedido/lista-de-pedidos/lista-de-pedidos.component';
import { PerfilDeUsuarioComponent } from './views/usuario/perfil-de-usuario/perfil-de-usuario.component';
import { EditarCategoriaComponent } from './views/categoria/editar-categoria/editar-categoria.component';
import { AgregarCategoriaComponent } from './views/categoria/agregar-categoria/agregar-categoria.component';
import { AgregarPlatilloComponent } from './views/platillo/agregar-platillo/agregar-platillo.component';
import { EditarPlatilloComponent } from './views/platillo/editar-platillo/editar-platillo.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent, canActivate: [Guardian] },
  { path: 'categorias', component: ListaDeCategoriasComponent, canActivate: [Guardian] },
  { path: 'categorias/agregar', component: AgregarCategoriaComponent, canActivate: [Guardian] },
  { path: 'categorias/editar/:id', component: EditarCategoriaComponent, canActivate: [Guardian] },
  { path: 'platillos', component: ListaDePlatillosComponent, canActivate: [Guardian] },
  { path: 'platillos/agregar', component: AgregarPlatilloComponent, canActivate: [Guardian] },
  { path: 'platillos/editar/:id', component: EditarPlatilloComponent, canActivate: [Guardian] },
  { path: 'usuarios', component: ListaDeUsuariosComponent, canActivate: [Guardian] },
  { path: 'usuarios/vercuenta', component: PerfilDeUsuarioComponent, canActivate: [Guardian] },
  { path: 'pedidos', component: ListaDePedidosComponent, canActivate: [Guardian] },
  { path: 'iniciarSesion', component: InicioDeSesionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
