import { ViaCepApiService } from './../../../services/via-cep-api/via-cep-api.service';
import { ViaCep } from './../../../models/via-cep/via-cep';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.scss']
})
export class FormPessoaComponent implements OnInit
{

  formContato: ViaCep = {};
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
          this.formContato = cepModel;
          this.showForm.next(true);
        }
      )
    }
  }

  enviarFormPessoa()
  {
    // TODO:
  }

  resetForm()
  {
    // TODO: Quando criar o modelo FormPessoa, criar um novo Objeto para resetar o formulário
  }


}
