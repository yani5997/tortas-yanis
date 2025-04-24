import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ProductsComponent } from '../pages/products/products.component';
import { PagoComponent } from '../pages/pago/pago.component';
import { ListaProductosComponent } from '../pages/lista-productos/lista-productos.component';
import { IniciarComponent } from '../pages/iniciar/iniciar.component';
import { RegistrarseComponent } from '../pages/registrarse/registrarse.component';
import { PagarComponent } from '../widgets/pagar/pagar.component';
import { PasswordComponent } from '../widgets/form-password/form-password';
import { PersonalComponent } from '../widgets/form-personal/form-personal';
import { ListarpersonalComponent } from '../widgets/listar-personal/listar-personal';
import { PagoyapeComponent } from '../pages/pagoyape/pagoyape.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'products', component: ProductsComponent},
  {path:'pago', component: PagoComponent},
  {path:'lista', component: ListaProductosComponent},
  {path: 'iniciar', component: IniciarComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'pagar', component: PagarComponent},
  {path: 'password', component: PasswordComponent},
  {path: 'widget-listarpersonal', component: ListarpersonalComponent},
  {path: 'app-pagoyape', component: PagoyapeComponent}
];
