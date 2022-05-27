import { environment } from './../../../environments/environment';
import { Foco } from './../../models/foco/foco';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FocoServiceService {

  constructor(private http: HttpClient) { }

  urlApiFocos = `${environment.urlApi}/focos`;

  getListFocos()
  {
    return this.http.get<Foco[]>(this.urlApiFocos);
  }

  getFocoById(id: number)
  {
    return this.http.get<Foco>(`${this.urlApiFocos}/${id}`);
  }

  postFoco(foco: Foco)
  {
    return this.http.post<Foco>(this.urlApiFocos, foco);
  }

  updateFoco(foco: Foco)
  {
    return this.http.put<Foco>(this.urlApiFocos, foco);
  }

  deleteFoco(id: number)
  {
    return this.http.delete<boolean>(`${this.urlApiFocos}/${id}`);
  }

  getQtdFocosPorBairro()
  {
    return this.http.get<number[]>(`${this.urlApiFocos}/quantidadeFocos`)
  }

  getNomeBairros()
  {
    return this.http.get<string[]>(`${this.urlApiFocos}/nomesBairros`)
  }

  updateFoto(id: number, file: FormData)
  {
    return this.http.put<any>(`${environment.urlApi}/focos/${id}/foto`, file);
  }
}
