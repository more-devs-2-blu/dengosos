import { ViaCepApiService } from './../../../services/via-cep-api/via-cep-api.service';
import { Subject } from 'rxjs';
import { ViaCep } from './../../../models/via-cep/via-cep';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FocoServiceService } from 'src/app/services/foco/foco-service.service';
import { Foco } from 'src/app/models/foco/foco';

class FormContato {
  descricaoFocos: string = '';
  endereco: ViaCep = new ViaCep({});

  constructor(object: Partial<FormContato>) {
    Object.assign(this, object);
  }
}

@Component({
  selector: 'app-form-foco',
  templateUrl: './form-foco.component.html',
  styleUrls: ['./form-foco.component.scss']
})
export class FormFocoComponent implements OnInit {

  files: Set<File> = new Set();
  msgRetorno = new Subject<boolean>();
  fileFoco!: FileList;

  @Input()
  formContato = new FormContato({});
  cepInput: string = '';
  focoRetornadoBackEnd: Foco = new Foco({});

  constructor(private cepService: ViaCepApiService,
    private focoService: FocoServiceService) { }

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
        }
      )
    }
  }

  enviarFormFoco()
  {
    //desc cep numero logradouro bairro localidade uf
    let foco = new Foco({descricaoFocos: this.formContato.descricaoFocos, cepFocos: this.formContato.endereco.cep, numeroEnderecoFocos: this.formContato.endereco.numero,
      logradouroFocos: this.formContato.endereco.logradouro, bairroFocos: this.formContato.endereco.bairro, localidadeFocos: this.formContato.endereco.localidade,
      ufFocos: this.formContato.endereco.uf});

      this.focoService.postFoco(foco).subscribe(
        (msg) => {

          this.focoRetornadoBackEnd = msg;
          // SETANDO ARQUIVO DE FOTO
          this.focoRetornadoBackEnd.foto = this.fileFoco[0];
          console.log(this.focoRetornadoBackEnd.foto)

          console.log('arquivo que vai ser postado')
          console.log(this.fileFoco[0])
          this.focoService.postImg(this.fileFoco[0]).subscribe(
            (msg) => {
              console.log('desgraça deve ter ido')
            }
          )

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

  onChange(event: any)
  {
    const selectedFiles = <FileList>event.srcElement.files;
    this.fileFoco = selectedFiles;
    console.log('ARQUIVO')
    console.log(this.fileFoco)
    this.files.add(selectedFiles[0])
    document.getElementById('customFileLabel')!.innerHTML = selectedFiles[0].name;

  }


}
