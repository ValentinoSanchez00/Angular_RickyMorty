
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiOneCharacterByIdService } from 'src/app/api-one-character-by-id.service';

//servicio
import { PopupService } from '../popup-service.service';

interface Personaje {
  name: string;
  species: string;
  gender: string;
  status: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  }
}

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  // Suponiendo que los datos del personaje tienen una estructura como esta

  id?: number = 1;
  datos: Personaje={
  name: "",
  species: "",
  gender: "",
  status: "",
  origin: {
    name: "",
  },
  location: {
    name: "",
  }, }
  constructor(private route: ActivatedRoute, private ApiOneCharacterByIdService: ApiOneCharacterByIdService,private popupService: PopupService) { }

  buscarRecursoPorId(id: number) {
    this.ApiOneCharacterByIdService.buscarPorId(id.toString()).subscribe(data => {
     /*  console.log(data); */
      this.datos = data;
    })
  }


  guardarDatos() {
    console.log(this.datos)
    if (this.datos && this.id) {
      this.ApiOneCharacterByIdService.actualizarPersonaje(this.id, this.datos).subscribe({
        next: response => {
          console.log('Personaje actualizado correctamente:', response);
          
        },
        error: error => {
          console.error('Error al actualizar el personaje:', error);
          // Handle the error here
        }
      });
    } else {
      console.log('No hay datos o ID disponibles.');
    }
  }
  
  


  ngOnInit(): void {
    this.id =  parseInt(this.route.snapshot.paramMap.get('id') || '1');
    this.buscarRecursoPorId(this.id);
  }

}






