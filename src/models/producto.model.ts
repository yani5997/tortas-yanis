export class ProductoModel {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  constructor(data: any) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
    this.precio = data.precio;
    this.imagen = data.imagen;
  }
}
