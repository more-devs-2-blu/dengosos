package com.dengue.api.dto;

import java.io.Serializable;
import java.util.Date;

import com.dengue.api.entity.Focos;

public class FocosDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer idFocos;
	private String descricaoFocos;
	private Date dataFocos;
	private String cepFocos;
	private String logradouroFocos;
	private String bairroFocos;
	private String localidadeFocos;
	private String ufFocos;

	public FocosDTO() {
		super();
	}

	public FocosDTO(Integer idFocos, String descricaoFocos, Date dataFocos, String cepFocos, String logradouroFocos,
			String bairroFocos, String localidadeFocos, String ufFocos) {
		super();
		this.idFocos = idFocos;
		this.descricaoFocos = descricaoFocos;
		this.dataFocos = dataFocos;
		this.cepFocos = cepFocos;
		this.logradouroFocos = logradouroFocos;
		this.bairroFocos = bairroFocos;
		this.localidadeFocos = localidadeFocos;
		this.ufFocos = ufFocos;
	}

	public Focos convertDtoToEntiy() {
		return new Focos(getIdFocos(), getDescricaoFocos(), getDataFocos(), getCepFocos(), getLogradouroFocos(),
				getBairroFocos(), getLocalidadeFocos(), getUfFocos());
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