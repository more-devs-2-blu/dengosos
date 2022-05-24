export class Foco
{
  idFocos?: number;
	descricaoFocos?: string;
  dataFocos?: Date;
	cepFocos?: string;
  logradouroFocos?: string;
  bairroFocos?: string;
  localidadeFocos?: string;
  ufFocos?: string;

  constructor(obj: Partial<Foco>)
  {
    Object.assign(this, obj);
  }
}
