package br.fimdapicada.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import br.fimdapicada.dto.FocosDTO;

@Entity
public class Focos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(length = 100)
	private String descricao;

	@CreationTimestamp
	@Column(name = "data", nullable = false, updatable = false)
	private Date data;

	@Column
	private String cep;

	@Column
	private Integer numeroEndereco;

	@Column
	private String logradouro;

	@Column
	private String bairro;

	@Column
	private String localidade;

	@Column
	private String uf;

	@Column(nullable = true)
	private String foto;

	public Focos() {
		super();
	}

	public Focos(Integer id, String descricao, Date data, String cep, Integer numeroEndereco, String logradouro,
			String bairro, String localidade, String uf, String foto) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.data = data;
		this.cep = cep;
		this.numeroEndereco = numeroEndereco;
		this.logradouro = logradouro;
		this.bairro = bairro;
		this.localidade = localidade;
		this.uf = uf;
		this.foto = foto;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getCep() {
		return cep;
	}

	public Integer getNumeroEndereco() {
		return numeroEndereco;
	}

	public void setNumeroEndereco(Integer numeroEndereco) {
		this.numeroEndereco = numeroEndereco;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getLocalidade() {
		return localidade;
	}

	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public FocosDTO getDTO() {
		return new FocosDTO(getId(), getDescricao(), getData(), getCep(), getNumeroEndereco(), getLogradouro(), getBairro(), getLocalidade(),
				getUf(), getFoto());
	}

}