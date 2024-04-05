import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiAllCharactersService {
  private apiUrl='https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
/*    get10Characters(): Observable<any> {
    this.apiUrl+='/?page=1&limit=10';
    console.log(this.apiUrl)
    return this.http.get<any>(this.apiUrl);

} */
}
