export class Foco
{
  idFocos?: number;
	descricaoFocos?: string;
  dataFocos?: Date;
	cepFocos?: string;
  numeroEnderecoFocos?: number;
  logradouroFocos?: string;
  bairroFocos?: string;
  localidadeFocos?: string;
  ufFocos?: string;
  foto?: File;

  constructor(obj: Partial<Foco>)
  {
    Object.assign(this, obj);
  }
}
