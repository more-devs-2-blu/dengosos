import { Subject } from 'rxjs';
import { Pessoa } from './../../../models/pessoa/pessoa';
import { PessoaServiceService } from './../../../services/pessoa/pessoa-service.service';
import { ViaCepApiService } from './../../../services/via-cep-api/via-cep-api.service';
import { ViaCep } from './../../../models/via-cep/via-cep';
import { Component, Input, OnInit } from '@angular/core';

class FormContato {
  nome: string = '';
  cpf: string = '';
  dataNasc: string = '';
  sexo: string = '';
  situacao: string = '';
  endereco: ViaCep = new ViaCep({});

  constructor(object: Partial<FormContato>) {
    Object.assign(this, object);
  }
}

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.scss'],
})
export class FormPessoaComponent implements OnInit {
  msgRetorno = new Subject<boolean>();
  @Input()
  formContato = new FormContato({});
  cepInput: string = '';

  constructor(
    private cepService: ViaCepApiService,
    private pessoaService: PessoaServiceService
  ) {}

  ngOnInit(): void {}

  getViaCEP(cep: FocusEvent) {
    if ((cep.target as HTMLInputElement)?.value) {
      let inputCEP = (cep.target as HTMLInputElement)?.value;



      const cepResponse = this.cepService.getCep(inputCEP);

      cepResponse.subscribe((cepModel) => {
        this.formContato.endereco = cepModel;
      });
    }
  }

  enviarFormPessoa() {
    let dataAtual = new Date();
    let dataNascimento = this.formContato.dataNasc;
    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth() + 1;
    let diaAtual = dataAtual.getDate();

    let dataNascimentoList = dataNascimento.split('-');

    let anoNasc = dataNascimentoList[0];
    let mesNasc = dataNascimentoList[1];
    let diaNasc = dataNascimentoList[2];
    let anoNascInt = parseInt(anoNasc);
    let mesNascInt = parseInt(mesNasc);
    let diaNascInt = parseInt(diaNasc);
    let idade = anoAtual - anoNascInt;

    if (mesAtual < mesNascInt) {
      idade--;
    } else if (mesAtual == mesNascInt) {
      if (diaAtual < diaNascInt) {
        idade--;
      }
    }

    //salvar
    let pessoa = new Pessoa({nomePessoas: this.formContato.nome, cpfPessoas: this.formContato.cpf,
      idadePessoas: idade, sexoPessoas: this.formContato.sexo, statusPessoas: this.formContato.situacao , cepPessoas: this.formContato.endereco.cep,
      logradouroPessoas: this.formContato.endereco.logradouro, numeroPessoas: this.formContato.endereco.numero,
      bairroPessoas: this.formContato.endereco.bairro, localidadePessoas: this.formContato.endereco.localidade,
      ufPessoas: this.formContato.endereco.uf})
      console.log(pessoa)
    this.pessoaService.postPessoa(pessoa).subscribe(
      (msg) => {
        this.msgRetorno.next(true);
        setTimeout(()=>
        {
          this.msgRetorno.next(false);
          this.formContato = new FormContato({});
          this.cepInput = ''
        },3000);
      }
    );
  }

  resetForm() {
    this.formContato = new FormContato({});
  }
}
