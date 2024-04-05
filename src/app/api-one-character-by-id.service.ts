import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators';
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
@Injectable({
  providedIn: 'root'
})
export class ApiOneCharacterByIdService {
  dataCharacter: Personaje={
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
  private apiUrl='https://rickandmortyapi.com/api/character/';
  constructor(
    private http: HttpClient
    
    ) {

     }
  buscarPorId(id:string): Observable<any> {
    console.log(id)
    const url = this.apiUrl+id;
    console.log(url)
    return this.http.get<any>(url)
      
  }

  actualizarPersonaje(id: number, datosActualizados: any): Observable<any> {
    const url = `${this.apiUrl}${id}`;
    return this.http.put<any>(url, datosActualizados).pipe(
      tap(() => {
        this.dataCharacter = { ...this.dataCharacter, ...datosActualizados }; // Actualizar dataCharacter con los nuevos datos
        console.log('Personaje actualizado correctamente:', this.dataCharacter);
      }),
      catchError(error => {
        // Manejar el error si es necesario
        throw new Error('Error al actualizar el personaje');
      })
    );
  }




}
