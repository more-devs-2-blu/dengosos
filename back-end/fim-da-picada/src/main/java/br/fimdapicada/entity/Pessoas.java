package br.fimdapicada.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import br.fimdapicada.dto.PessoasDTO;



@Entity
public class Pessoas {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(length = 45, nullable = false)
	private String nome;

	@Column(unique = true)
	private String cpf;
	
	@Column(nullable = false)
	private Date dataNascimento;

	@Column(length = 20, nullable = false)
	private String sexo;

	/**
	 * C - Confirmado S - Suspeito
	 */
	@Column(length = 1)
	private String status;
	
	@CreationTimestamp
	@Column(name = "data", nullable = false, updatable = false)
	private Date data;

	@Column
	private String cep;

	@Column
	private String logradouro;

	@Column
	private String bairro;

	@Column
	private String localidade;

	@Column
	private String uf;

	public Pessoas() {
		super();
	}


	public Pessoas(Integer id, String nome, String cpf, Date dataNascimento, String sexo, String status, Date data,
			String cep, String logradouro, String bairro, String localidade, String uf) {
		super();
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
		this.sexo = sexo;
		this.status = status;
		this.data = data;
		this.cep = cep;
		this.logradouro = logradouro;
		this.bairro = bairro;
		this.localidade = localidade;
		this.uf = uf;
	}
	
	public String getCpf() {
		return cpf;
	}


	public void setCpf(String cpf) {
		this.cpf = cpf;
	}


	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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

	public PessoasDTO getDTO() {
		return new PessoasDTO(getId(), getNome(), getCpf(), getDataNascimento(), getSexo(), getStatus(), getData(), getCep(),
				getLogradouro(), getBairro(), getLocalidade(), getUf());
	}

}