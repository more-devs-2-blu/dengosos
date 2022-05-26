package br.fimdapicada.dto;

import java.io.Serializable;
import java.util.Date;

import br.fimdapicada.entity.Focos;

public class FocosDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer idFocos;
	private String descricaoFocos;
	private Date dataFocos;
	private String cepFocos;
	private Integer numeroEnderecoFocos;
	private String logradouroFocos;
	private String bairroFocos;
	private String localidadeFocos;
	private String ufFocos;

	private String foto;

	public FocosDTO() {
		super();
	}

	public FocosDTO(Integer idFocos, String descricaoFocos, Date dataFocos, String cepFocos,
			Integer numeroEnderecoFocos, String logradouroFocos, String bairroFocos, String localidadeFocos,
			String ufFocos, String foto) {
		super();
		this.idFocos = idFocos;
		this.descricaoFocos = descricaoFocos;
		this.dataFocos = dataFocos;
		this.cepFocos = cepFocos;
		this.numeroEnderecoFocos = numeroEnderecoFocos;
		this.logradouroFocos = logradouroFocos;
		this.bairroFocos = bairroFocos;
		this.localidadeFocos = localidadeFocos;
		this.ufFocos = ufFocos;
		this.foto = foto;
	}

	public Focos convertDtoToEntiy() {
		return new Focos(getIdFocos(), getDescricaoFocos(), getDataFocos(), getCepFocos(), getNumeroEnderecoFocos(),
				getLogradouroFocos(), getBairroFocos(), getLocalidadeFocos(), getUfFocos(), getFoto());
	}

	public Integer getNumeroEnderecoFocos() {
		return numeroEnderecoFocos;
	}

	public void setNumeroEnderecoFocos(Integer numeroEnderecoFocos) {
		this.numeroEnderecoFocos = numeroEnderecoFocos;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public Integer getIdFocos() {
		return idFocos;
	}

	public void setIdFocos(Integer idFocos) {
		this.idFocos = idFocos;
	}

	public String getDescricaoFocos() {
		return descricaoFocos;
	}

	public void setDescricaoFocos(String descricaoFocos) {
		this.descricaoFocos = descricaoFocos;
	}

	public Date getDataFocos() {
		return dataFocos;
	}

	public void setDataFocos(Date dataFocos) {
		this.dataFocos = dataFocos;
	}

	public String getCepFocos() {
		return cepFocos;
	}

	public void setCepFocos(String cepFocos) {
		this.cepFocos = cepFocos;
	}

	public String getLogradouroFocos() {
		return logradouroFocos;
	}

	public void setLogradouroFocos(String logradouroFocos) {
		this.logradouroFocos = logradouroFocos;
	}

	public String getBairroFocos() {
		return bairroFocos;
	}

	public void setBairroFocos(String bairroFocos) {
		this.bairroFocos = bairroFocos;
	}

	public String getLocalidadeFocos() {
		return localidadeFocos;
	}

	public void setLocalidadeFocos(String localidadeFocos) {
		this.localidadeFocos = localidadeFocos;
	}

	public String getUfFocos() {
		return ufFocos;
	}

	public void setUfFocos(String ufFocos) {
		this.ufFocos = ufFocos;
	}

}