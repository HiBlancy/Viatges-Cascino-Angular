import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DestinationsComponent } from './components/destinations/destinations.component';

export const routes: Routes = [
    {path: 'home', component: MainComponent},
    {path: 'destinations', component: DestinationsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
