import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaDto } from 'src/app/interfaces/categoria-dto-in';
import { RepositorioService } from 'src/app/services/repositorio.service';
import { PlatilloDto, PlatilloDtoIn } from '../platillo-dto';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-formulario-de-platillo',
  templateUrl: './formulario-de-platillo.component.html',
  styleUrls: ['./formulario-de-platillo.component.css']
})
export class FormularioDePlatilloComponent {
  categorias: CategoriaDto[] = []
  iamgenCambiada: boolean = false
  @Input() platilloDto!: PlatilloDto
  @Output() platilloEmmit: EventEmitter<PlatilloDtoIn> = new EventEmitter<PlatilloDtoIn>()
  estaCargando: boolean = false

  guardar() {
    console.log(this.formGroup.value)
    if (this.formGroup.valid) {
      const platillo: PlatilloDtoIn = {
        categoriaId: this.formGroup.get('categoriaId')?.value,
        descripcion: this.formGroup.get('descripcion')?.value,
        imagen: this.formGroup.get('imagen')?.value,
        nombre: this.formGroup.get('nombre')?.value,
        precio: this.formGroup.get('precio')?.value,
      }
      this.platilloEmmit.emit(platillo)
    }
  }

  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private repo: RepositorioService
  ) {
    this.formGroup = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
      descripcion: ['', { validators: [Validators.required, Validators.minLength(3)] }],
      precio: ['', { validators: [Validators.required] }],
      categoriaId: ['', { validators: [Validators.required] }],
      imagen: ['', { validators: [Validators.required] }]
    })
    this.obtenerCategorias()
  }

  obtenerCategorias() {
    this.estaGuardando(true)
    this.repo.categoria.obtenerTodos().subscribe({
      next: (categorias) => {
        this.categorias = categorias
        this.estaGuardando(false)
      },
      error: (error) => {
        this.estaGuardando(false)
        alert("Ocurrio un error")
      }
    })
  }

  agregarImagen(file: File) {
    this.iamgenCambiada = true
    this.formGroup.get('imagen')?.setValue(file)
  }

  ngOnChanges() {
    if (this.platilloDto != undefined) {
      console.log(this.platilloDto)
      this.formGroup.get('nombre')?.setValue(this.platilloDto.nombre)
      this.formGroup.get('descripcion')?.setValue(this.platilloDto.descripcion)
      this.formGroup.get('precio')?.setValue(this.platilloDto.precio)
      this.formGroup.get('categoriaId')?.setValue(this.platilloDto.categoria.id)
      this.urlDeLaImagen = environment.api + "platillos/"+ this.platilloDto.id + "/Imagen"
    }
  }

  private habilitarElFormulario(habilitar: boolean) {
    if (habilitar) {
      this.formGroup.get('nombre')?.disable()
      this.formGroup.get('descripcion')?.disable()
      this.formGroup.get('precio')?.disable()
      this.formGroup.get('categoriaId')?.disable()
      this.formGroup.get('imagen')?.disable()
    } else {
      this.formGroup.get('nombre')?.enable()
      this.formGroup.get('descripcion')?.enable()
      this.formGroup.get('precio')?.enable()
      this.formGroup.get('categoriaId')?.enable()
      this.formGroup.get('imagen')?.enable()
    }
  }

  estaGuardando(guardando: boolean) {    
    this.estaCargando = guardando
    this.habilitarElFormulario(guardando)
  }

  urlDeLaImagen?: string = ''
}
