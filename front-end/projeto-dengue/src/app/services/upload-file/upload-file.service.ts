import { UploadFile } from './../../models/upload-file/upload-file';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  urlApiPessoa = `${environment.urlApi}/file`;

  postImg(uploadFile: UploadFile)
  {
   return this.http.post<UploadFile>(environment.urlApi, uploadFile);
  }
}
