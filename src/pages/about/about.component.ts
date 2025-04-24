import { Component, OnInit } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CarouselControlComponent, CarouselInnerComponent,
  CarouselItemComponent, ThemeDirective} from '@coreui/angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: './about.component.html',
  imports: [
    CommonModule,
    ThemeDirective, CarouselComponent, CarouselInnerComponent, 
    CarouselItemComponent, CarouselControlComponent, RouterLink
  ]
})

export class AboutComponent implements OnInit{
  //logica de negocio
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  ngOnInit(): void {
    this.slides[0] = {
      src: '/torta-vainilla.jpg'
    };
    this.slides[1] = {
      src: '/torta-leche.jpg'
    };
    this.slides[2] = {
      src: '/torta.png'
    };
  }
  onItemChange(Sevent: any): void {
    console.log('carousel onItemChange', Sevent);
  }
}
