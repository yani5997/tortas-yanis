import { Component } from "@angular/core";
import { PersonalComponent } from "../../widgets/form-personal/form-personal";
import { PasswordComponent } from "../../widgets/form-password/form-password";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-iniciar",
  templateUrl: './iniciar.component.html',
  imports: [PersonalComponent, PasswordComponent, ReactiveFormsModule, CommonModule],
})

export class IniciarComponent{
  //logica de negocio
  miFormulario1: FormGroup;
  constructor(private forBuilder: FormBuilder) {
    this.miFormulario1 = this.forBuilder.group({
      usuario:['', [Validators.required]],
      contrasena:['', [Validators.required]]
    })
  }
  get usuario(){
    return this.miFormulario1.get('usuario');
  }
  get contrasena(){
    return this.miFormulario1.get('contrasena');
  }
}
