import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importante para HttpClient

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Aquí agregas otros componentes, directivas y pipes
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Necesario para usar HttpClient
    // Otros módulos que necesites (FormsModule, RouterModule, etc.)
  ],
  providers: [
    // Servicios globales van aquí
  ],
  bootstrap: [AppComponent] // Componente raíz
})
export class AppModule { }