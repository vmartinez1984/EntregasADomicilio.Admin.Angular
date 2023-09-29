import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { LoginComponent } from './views/usuario/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaDePlatillosComponent } from './views/platillo/lista-de-platillos/lista-de-platillos.component';

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
    LoginComponent,
    ListaDePlatillosComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
