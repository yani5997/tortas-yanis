import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClimaComponent } from '../widgets/clima/clima.component';
import { NavegacionComponent } from '../widgets/navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, ClimaComponent, NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_spa1';
}
