import { Component, input, Input, OnInit } from "@angular/core";
import { PagarComponent } from "../../widgets/pagar/pagar.component";
//import { ProductoModel } from "../../models/producto.model";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: "app-pago",
  templateUrl: './pago.component.html',
  imports: [PagarComponent]
})

export class PagoComponent implements OnInit{
   //logica de negocio
   constructor(private _usuarioService: UsuarioService){

   }
  ngOnInit(): void {
    console.log('ngmInit');
    this._usuarioService.generateToken().subscribe({
      next: (data:any) => {
        console.log('gg', data);
        localStorage.setItem("xangulary", data.token);
      },
      error: (err) => {

      }
    });
    }
  }


