import { FocoServiceService } from 'src/app/services/foco/foco-service.service';
import { Foco } from 'src/app/models/foco/foco';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-focos',
  templateUrl: './list-focos.component.html',
  styleUrls: ['./list-focos.component.scss']
})
export class ListFocosComponent implements OnInit {

  listaFocos$ = new Observable<Foco[]>();

  constructor(private focoService: FocoServiceService) { }

  ngOnInit(): void {

    this.list();
  }

  list(){
    this.listaFocos$ = this.focoService.getListFocos();
    console.log(this.listaFocos$)
  }
}
