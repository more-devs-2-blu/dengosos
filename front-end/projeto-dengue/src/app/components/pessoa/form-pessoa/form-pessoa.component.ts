import { ViaCepApiService } from './../../../services/via-cep-api/via-cep-api.service';
import { ViaCep } from './../../../models/via-cep/via-cep';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

class FormContato {
  nome: string = '';
  cpf: string = '';
  dataNasc: string = '';
  sexo: string = '';
  situacao: string = '';
  endereco: ViaCep = new ViaCep({});

  constructor(object: Partial<FormContato>)
  {
    Object.assign(this, object);
  }
}

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.scss']
})
export class FormPessoaComponent implements OnInit
{

  formContato = new FormContato({});
  showForm = new Subject<boolean>();
  cepInput: string = '';

  constructor(private cepService: ViaCepApiService) { }

  ngOnInit(): void {
  }

  getViaCEP(cep: FocusEvent)
  {
    if ((cep.target as HTMLInputElement)?.value)
    {
      let inputCEP = (cep.target as HTMLInputElement)?.value;

      console.log(inputCEP);

      const cepResponse = this.cepService.getCep(inputCEP);

      cepResponse.subscribe(
        (cepModel) =>
        {
          this.formContato.endereco = cepModel;
          this.showForm.next(true);
        }
      )
    }
  }

  enviarFormPessoa()
  {
    console.log(`Nome: ${this.formContato.nome}`);
    console.log(`CPF: ${this.formContato.cpf}`);
    console.log(`Data de nascimento: ${this.formContato.dataNasc}`);
    console.log(`Sexo: ${this.formContato.sexo}`);
    console.log(`Situação: ${this.formContato.situacao}`);
    console.log(`Rua: ${this.formContato.endereco.logradouro}`);
    console.log(`Número: ${this.formContato.endereco.numero}`);
    console.log(`Bairro: ${this.formContato.endereco.bairro}`);
    console.log(`Cidade: ${this.formContato.endereco.localidade}`);
    console.log(`UF: ${this.formContato.endereco.uf}`);


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
        };
    };
   };

  resetForm()
  {
    this.formContato = new FormContato({});
  }

}
