import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListaProductosComponent } from "../lista-productos/lista-productos.component";

@Component({
  selector: "app-about",
  templateUrl: './products.component.html',
  imports: [CommonModule, ListaProductosComponent]
})

export class ProductsComponent{
  //logica de negocio
}
