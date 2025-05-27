import { Component } from "@angular/core";
import { ProductoModel } from "../../models/producto.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-lista-productos",
  templateUrl: './lista-productos.component.html',
  imports: [CommonModule]
})

export class ListaProductosComponent{
  //logica de negocio
  productos: ProductoModel[] = [];
  constructor(){
    this.productos.push(new ProductoModel({
      'id': 12,
      'nombre': 'Torta de Chocolate',
      'descripcion': 'Torta grande para dusfrutar en familia',
      'precio': 50
    }));
    this.productos.push(new ProductoModel({
      'id': 12,
      'nombre': 'Torta de Vainilla',
      'descripcion': 'Torta grande para dusfrutar en familia',
      'precio': 50
    }));
    this.productos.push(new ProductoModel({
      'id': 122,
      'nombre': 'Torta de Leche',
      'descripcion': 'Torta grande para dusfrutar en familia',
      'precio': 50
    }));
    this.productos.push(new ProductoModel({
      'id': 125,
      'nombre': 'Chisket de Maracuya',
      'descripcion': 'Torta grande para dusfrutar en familia',
      'precio': 50
    }));
    this.productos.push(new ProductoModel({
      'id': 125,
      'nombre': 'Chisket de Maracuya',
      'descripcion': 'Torta grande para dusfrutar en familia',
      'precio': 50
    }));


  }
}
