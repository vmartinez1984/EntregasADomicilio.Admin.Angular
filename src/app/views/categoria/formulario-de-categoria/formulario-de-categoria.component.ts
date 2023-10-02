import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaDtoIn } from 'src/app/interfaces/categoria-dto-in';

@Component({
  selector: 'app-formulario-de-categoria',
  templateUrl: './formulario-de-categoria.component.html',
  styleUrls: ['./formulario-de-categoria.component.css']
})
export class FormularioDeCategoriaComponent {
  @Input() categoria?: CategoriaDtoIn
  @Input() habilitarFormulario: boolean = true
  @Output() categoriaEmmit: EventEmitter<CategoriaDtoIn> = new EventEmitter<CategoriaDtoIn>()

  guardar() {
    //console.log(this.formGroup)
    if (this.formGroup.valid) {
      this.categoriaEmmit.emit(this.formGroup.value)
    }
  }

  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
      estaActivo: true
    })
  }

  ngOnChanges() {
    if (this.habilitarFormulario == true)
      this.habilitarElFormulario(true)
    else
      this.habilitarElFormulario(false)
    //console.log(this.categoria)
    if (this.categoria !== undefined)
      this.formGroup.patchValue(this.categoria)
  }

  habilitarElFormulario(habilitar: boolean) {
    if (habilitar) {
      this.formGroup.get('nombre')?.enable()
      this.formGroup.get('estaActivo')?.enable()
    } else {
      this.formGroup.get('nombre')?.disable()
      this.formGroup.get('estaActivo')?.disable()
    }
  }
}
