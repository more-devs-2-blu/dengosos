import { ImgFocoService } from './../../services/img-foco/img-foco.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-img-foco',
  templateUrl: './img-foco.component.html',
  styleUrls: ['./img-foco.component.scss']
})
export class ImgFocoComponent implements OnInit {


  listFocos$ = new Observable<any>();

  constructor(private service: ImgFocoService) { }

  ngOnInit(): void {
    this.listarFocos();
  }

  listarFocos() {
    this.listFocos$ = this.service.getListFocos();
  }



}
