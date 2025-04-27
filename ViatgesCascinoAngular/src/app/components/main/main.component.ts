import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DestinacionesMain } from '../../common/destinaciones';
import { DestinacionesMainService } from '../../servicio/destinaciones-main.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-main',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterModule,
    TranslateModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
    destinacionesmain!: DestinacionesMain;

    constructor(private destinacionesService: DestinacionesMainService) { }

    ngOnInit(): void {
      this.loadDestinaciones();
    }

    loadDestinaciones() {
      this.destinacionesService.getDestinaciones().subscribe(
        {
          next: (data) => {
            console.log(data)
            this.destinacionesmain = data;
          },
          error: (error) => {
            console.error('Error loading destinations:', error);
          },
          complete: () => {
            console.log('Destinations loaded successfully');
          }
        }
      );
    }
}