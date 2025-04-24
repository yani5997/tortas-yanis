import { Component } from "@angular/core";
import { ProductoModel } from "../../models/producto.model";
import { TarjetaComponent } from "../../widgets/tarjeta/tarjeta.component";
import { PagarComponent } from "../../widgets/pagar/pagar.component";
import { ListaProductosComponent } from "../lista-productos/lista-productos.component";
import { ProductoService } from "../../services/producto.service";
import { subscribeOn } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  templateUrl: './home.component.html',
  imports: [TarjetaComponent, PagarComponent, ListaProductosComponent, CommonModule]
  //para poner css
})

export class HomeComponent{
  //logica de negocio
  myproducto: ProductoModel;
  segundoprod: ProductoModel;
  tercerprod: ProductoModel;
  cuartoprod: ProductoModel;
  totales: number = 0;
  productos: ProductoModel[] = [];

  constructor(_productoServise: ProductoService) {
    this.myproducto = new ProductoModel({
      'id': 12,
      'nombre': 'Torta de Chocolate',
      'descripcion': 'Torta sabor chocolate, relleno de fudge y mermelada de sauco. Cubierta con crema chantilly blanca. Decorada con virutas chocolate y cerezas.',
      'precio': 50,
      'imagen':'/torta.png'

    });
    this.segundoprod = new ProductoModel({
      'id': 13,
      'nombre': 'Torta de Vainilla',
      'descripcion': 'Torta sabor vainilla, relleno de flan y esponjoso. Cubierta con crema chantilly blanca. Decorada con virutas chocolate y cerezas.',
      'precio': 50,
      'imagen':'/torta-vainilla.jpg'
    });
    this.tercerprod = new ProductoModel({
      'id': 14,
      'nombre': 'Torta de Leche',
      'descripcion': 'Torta de leche, relleno de fudge y mermelada de sauco. Cubierta con crema chantilly blanca. Decorada con virutas chocolate y cerezas.',
      'precio': 50,
      'imagen':'/torta-leche.jpg'
    })
    this.cuartoprod = new ProductoModel({
      'id': 14,
      'nombre': 'Chisket de Maracuya',
      'descripcion': 'Torta sabor maracuya, relleno de fudge y mermelada de sauco. Cubierta con crema chantilly blanca. Decorada con virutas chocolate y cerezas.',
      'precio': 50,
      'imagen':'/chisket.jpg'
    })

    _productoServise.traerProductos()
      .subscribe({
        next: (data:any) => {
          this.productos = data.map((e: any) => new ProductoModel({
            id: e.id,
            nombre: e.nombre,
            imagen: e.imagen
          }));
        },
        error: (error:any) => {
          console.log('error', error);
        }
      })
  }
  cambiar(){
    this.myproducto.nombre += '1';
  }
  incrementar(){
    this.totales = this.totales + 1;
  }
}
