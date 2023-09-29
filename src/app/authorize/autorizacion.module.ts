import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { AutorizacionComponent } from './autorizacion/autorizacion.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    InicioDeSesionComponent,
    AutorizacionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ], exports: [
    AutorizacionComponent
  ]
})
export class AutorizacionModule { }
