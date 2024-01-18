import { CategoriaDto } from "src/app/interfaces/categoria-dto-in";

export interface PlatilloDto {
    categoria:CategoriaDto
    descripcion: string
    id: number
    nombre: string
    precio: number
    imagen: string
}

export interface PlatilloDtoIn {
    categoriaId:number
    descripcion: string    
    nombre: string
    precio: number
    imagen: File
}

