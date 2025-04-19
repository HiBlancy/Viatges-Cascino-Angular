import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LaAgenciaComponent } from './components/la-agencia/la-agencia.component';
import { CarnavalVeneciaComponent } from './components/destinos/carnaval-venecia/carnaval-venecia.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PortaventuraComponent } from './components/destinos/portaventura/portaventura.component';
import { MercadoNavidenoComponent } from './components/destinos/mercado-navideno/mercado-navideno.component';
import { PlayaDeAroComponent } from './components/destinos/playa-de-aro/playa-de-aro.component';

export const routes: Routes = [
     // Redirigir al home cuando no se ingrese ninguna ruta
     { path: '', redirectTo: '/home', pathMatch: 'full' }, // Aquí rediriges a home al cargar la web.

     { path: 'home', component: MainComponent }, 
 
     { path: 'catalogo', component: CatalogoComponent },
     { path: 'destinations', component: DestinationsComponent },
     { path: 'la-agencia', component: LaAgenciaComponent },
     { path: 'contacto', component: ContactoComponent },
 
     // Destinos específicos
     { path: 'carnaval-venecia', component: CarnavalVeneciaComponent },
     { path: 'portaventura', component: PortaventuraComponent },
     { path: 'mercado_navideno', component: MercadoNavidenoComponent },
     { path: 'playa-de-aro', component: PlayaDeAroComponent },
 
     // Ruta para manejar páginas no encontradas
     { path: '**', component: NotFoundComponent }
];
