import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LaAgenciaComponent } from './components/la-agencia/la-agencia.component';
import { CarnavalVeneciaComponent } from './components/destinos/carnaval-venecia/carnaval-venecia.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    MainComponent, 
    CatalogoComponent, 
    NavBarComponent, 
    LaAgenciaComponent, 
    FooterComponent, 
    MenuComponent, 
    ContactoComponent,
    //destinos concretos
    CarnavalVeneciaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ViatgesCascinoAngular';
}
