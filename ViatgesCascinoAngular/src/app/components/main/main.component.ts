import { Component, OnInit } from '@angular/core';
import { DestinacionesMain } from '../../common/destinaciones';
import { DestinacionesMainService } from '../../servicio/destinaciones-main.service';

@Component({
  selector: 'app-main',
  imports: [],
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
