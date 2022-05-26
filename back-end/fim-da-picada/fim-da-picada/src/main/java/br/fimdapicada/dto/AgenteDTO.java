package br.fimdapicada.dto;

import java.io.Serializable;

import javax.persistence.Column;

import br.fimdapicada.entity.Agente;
import br.fimdapicada.entity.Focos;

public class AgenteDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Integer idAgente;
	private String usuarioAgente;
	private String senhaAgente;
	private String emailAgente;
	
	public AgenteDTO() {
		super();
	}

	public AgenteDTO(Integer idAgente, String usuarioAgente, String senhaAgente, String emailAgente) {
		super();
		this.idAgente = idAgente;
		this.usuarioAgente = usuarioAgente;
		this.senhaAgente = senhaAgente;
		this.emailAgente = emailAgente;
	}
	
	
	public Agente convertDtoToEntiy() {
		return new Agente(getIdAgente(), getUsuarioAgente(), getSenhaAgente(),getEmailAgente());
	}

	public Integer getIdAgente() {
		return idAgente;
	}

	public void setIdAgente(Integer idAgente) {
		this.idAgente = idAgente;
	}

	public String getUsuarioAgente() {
		return usuarioAgente;
	}

	public void setUsuarioAgente(String usuarioAgente) {
		this.usuarioAgente = usuarioAgente;
	}

	public String getSenhaAgente() {
		return senhaAgente;
	}

	public void setSenhaAgente(String senhaAgente) {
		this.senhaAgente = senhaAgente;
	}

	public String getEmailAgente() {
		return emailAgente;
	}

	public void setEmailAgente(String emailAgente) {
		this.emailAgente = emailAgente;
	}



}
