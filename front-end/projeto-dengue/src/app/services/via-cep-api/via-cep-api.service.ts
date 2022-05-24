import { ViaCep } from './../../models/via-cep/via-cep';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViaCepApiService {

  constructor(private http: HttpClient) { }

  getCep(cep: string)
  {
    const urlGet = `${environment.urlApiViaCep}${cep}/json/`;
    return this.http.get<ViaCep>(urlGet);
  }
}
