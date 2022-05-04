import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  constructor(private http: HttpClient) { }

  getProfesionales() {
    this.http.get('https://empresa-cabrera-test.sytes.net/Api')
      .subscribe(data => console.log(data))
  }
}
