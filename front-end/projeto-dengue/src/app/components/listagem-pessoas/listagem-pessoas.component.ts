import { PessoaServiceService } from './../../services/pessoa/pessoa-service.service';
import { Observable } from 'rxjs';
import { Pessoa } from './../../models/pessoa/pessoa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.scss']
})
export class ListagemPessoasComponent implements OnInit {

  listaPessoas = new Observable<Pessoa[]>();

  constructor(private service: PessoaServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.listaPessoas = this.service.getPessoas();
  }

}
