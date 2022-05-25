import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgFocoService {


  urlApiFocos:string = `${environment.urlApi}`;

  constructor(private http: HttpClient) { }

  getListFocos() {
    console.log("Oi");
    return this.http.get(this.urlApiFocos);
  }

}
