import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LaAgenciaComponent } from './components/la-agencia/la-agencia.component';
import { CarnavalVeneciaComponent } from './components/destinos/carnaval-venecia/carnaval-venecia.component';

export const routes: Routes = [
    {path: 'home', component: MainComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'destinations', component: DestinationsComponent},
    {path: 'la-agencia', component: LaAgenciaComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' },

    //destinos concretos
    {path: 'carnaval-venecia', component: CarnavalVeneciaComponent}
];
