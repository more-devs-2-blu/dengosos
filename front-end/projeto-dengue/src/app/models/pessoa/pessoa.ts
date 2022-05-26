export class Pessoa
{
  idPessoas?: number;
	nomePessoas?: string; ///////////////
	cpfPessoas?: string;  ///////////////
	idadePessoas?: number; ///////////////
	sexoPessoas?: string; ///////////////
	statusPessoas?: string; ///////////////
	dataPessoas?: Date;
	cepPessoas?: string; ///////////////
	logradouroPessoas?: string; ///////////////
  numeroPessoas?: number; ///////////////
	bairroPessoas?: string; ///////////////
	localidadePessoas?: string; ///////////////
	ufPessoas?: string; ///////////////

  constructor(obj: Partial<Pessoa>)
  {
    Object.assign(this, obj);
  }
}
