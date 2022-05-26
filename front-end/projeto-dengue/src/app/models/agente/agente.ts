export class Agente {
  nome?: string;
  cpf?: string;
  dataNasc?: string;
  sexo?: string;
  situacao?: string;
  cep?: string;
  logradouro?: string; //rua
  numero?: number;
  bairro?: string;
  localidade?: string; //cidade
  uf?: string

  constructor(object: Partial<Agente>)
  {
    Object.assign(this, object);
  }
}
