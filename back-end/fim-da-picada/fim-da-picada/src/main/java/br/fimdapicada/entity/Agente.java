package br.fimdapicada.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.fimdapicada.dto.AgenteDTO;
import br.fimdapicada.dto.FocosDTO;

@Entity
public class Agente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private String usuario;
	
	@Column
	private String senha;
	
	@Column
	private String email;

	public Agente() {
		super();
	}

	public Agente(Integer id, String usuario, String senha, String email) {
		super();
		this.id = id;
		this.usuario = usuario;
		this.senha = senha;
		this.email = email;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}



	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public AgenteDTO getDTO() {
		return new AgenteDTO(getId(),getUsuario(),getSenha(),getEmail()); 
	}
	
}
