import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './template/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './template/menu/menu.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { ListaDeCategoriasComponent } from './views/categoria/lista-de-categorias/lista-de-categorias.component';
import { AgregarCategoriaComponent } from './views/categoria/agregar-categoria/agregar-categoria.component';
import { EditarCategoriaComponent } from './views/categoria/editar-categoria/editar-categoria.component';
import { FormularioDeCategoriaComponent } from './views/categoria/formulario-de-categoria/formulario-de-categoria.component';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListaDePlatillosComponent } from './views/platillo/lista-de-platillos/lista-de-platillos.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { InterceptorService } from './authorize/interceptor.service';
import { ListaDeUsuariosComponent } from './views/usuario/lista-de-usuarios/lista-de-usuarios.component';
import { ListaDePedidosComponent } from './views/pedido/lista-de-pedidos/lista-de-pedidos.component';
import { PerfilDeUsuarioComponent } from './views/usuario/perfil-de-usuario/perfil-de-usuario.component';
import { FormularioDeUsuarioComponent } from './views/usuario/formulario-de-usuario/formulario-de-usuario.component';
import { AgregarUsuarioComponent } from './views/usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './views/usuario/editar-usuario/editar-usuario.component';
import { FormularioContraseniaComponent } from './views/usuario/formulario-contrasenia/formulario-contrasenia.component';
import { RestablecerContraseniaComponent } from './views/usuario/restablecer-contrasenia/restablecer-contrasenia.component';
import { ActualizarContraseniaComponent } from './views/usuario/actualizar-contrasenia/actualizar-contrasenia.component';
import { AutorizacionModule } from './authorize/autorizacion.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent,
    ListaDeCategoriasComponent,
    AgregarCategoriaComponent,
    EditarCategoriaComponent,
    FormularioDeCategoriaComponent,
    BienvenidaComponent,
    ListaDePlatillosComponent,        
    ListaDeUsuariosComponent,
    ListaDePedidosComponent,
    PerfilDeUsuarioComponent,
    FormularioDeUsuarioComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    FormularioContraseniaComponent,
    RestablecerContraseniaComponent,
    ActualizarContraseniaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AutorizacionModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
