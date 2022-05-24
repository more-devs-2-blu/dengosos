export class ViaCep {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
  numero?: number;

  constructor(object: Partial<ViaCep>)
  {
    Object.assign(this, object);
  }
}
