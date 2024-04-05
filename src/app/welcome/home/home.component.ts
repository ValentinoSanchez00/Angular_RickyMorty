import { Component, OnInit } from '@angular/core';
import { ApiAllCharactersService } from 'src/app/api-all-characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false; // Bandera para indicar si la carga está en progreso
  datos: any[] = []; // Variable para almacenar los datos obtenidos de la API

  constructor(private dataService: ApiAllCharactersService) { } // Inyecta el servicio ApiMortyService en el constructor



  ngOnInit(): void {
    this.loading = true; // Indica que la carga está en progreso al iniciar el componente

    // Llama al método getData del servicio y suscríbete para recibir los datos
    this.dataService.getData().subscribe(data => {
      this.datos = data.results; // Almacena los datos obtenidos en la variable datos
      /* console.log(this.datos); */ 
      this.loading = false; // Indica que la carga ha finalizado
    });
  }
}
