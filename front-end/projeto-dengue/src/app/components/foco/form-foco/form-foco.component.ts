import { ViaCepApiService } from './../../../services/via-cep-api/via-cep-api.service';
import { Subject } from 'rxjs';
import { ViaCep } from './../../../models/via-cep/via-cep';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-foco',
  templateUrl: './form-foco.component.html',
  styleUrls: ['./form-foco.component.scss']
})
export class FormFocoComponent implements OnInit {

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

}
