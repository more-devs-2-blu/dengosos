export class Pessoa
{
  idPessoas?: number;
	nomePessoas?: string;
	cpfPessoas?: number;
	dataNascimentoPessoas?: Date;
	sexoPessoas?: string;
	statusPessoas?: string;
	dataPessoas?: Date;
	cepPessoas?: string;
	logradouroPessoas?: string;
	bairroPessoas?: string;
	localidadePessoas?: string;
	ufPessoas?: string;
  
  constructor(obj: Partial<Pessoa>)
  {
    Object.assign(this, obj);
  }
}
