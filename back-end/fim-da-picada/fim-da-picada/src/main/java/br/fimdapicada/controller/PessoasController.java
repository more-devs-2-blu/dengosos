package br.fimdapicada.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.fimdapicada.dto.PessoasDTO;
import br.fimdapicada.service.PessoasService;
import io.swagger.annotations.ApiOperation;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/pessoas")
public class PessoasController {

	@Autowired
	PessoasService service;

	@ApiOperation(value = "Retorna uma lista com todos os Formulários cadastrados de Pessoas")
	@GetMapping
	public List<PessoasDTO> getAll() {
		return service.getAll();
	}

	@ApiOperation(value = "Retorna um formulário de Pessoa cadastrado pelo seu Id")
	@GetMapping("/{id}")
	public PessoasDTO getById(@PathVariable("id") Integer id) throws Exception {
		return service.getById(id);
	}

	@ApiOperation(value = "Salva um formulário de Pessoa")
	@PostMapping
	public ResponseEntity<PessoasDTO> save(@RequestBody PessoasDTO pessoa) {
		return new ResponseEntity<PessoasDTO>(service.save(pessoa), HttpStatus.CREATED);

	}
	@ApiOperation(value ="Deleta um formulário de Pessoa pelo seu Id")
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") Integer idPessoas) throws Exception {
		return new ResponseEntity<>(service.delete(idPessoas), HttpStatus.OK);

	}
	
	@ApiOperation(value ="Retorna uma lista de quantidade de casos por Bairro,"
			+ " a partir do método criado no serviço")
	@GetMapping("/quantidadeCasos")
	public List<Integer> pegarQtdCasosPorBairro()
	{
		return service.qtdPessoasPorBairro();
	}
	
	@ApiOperation(value ="Retorna uma lista de Faixa Etaria,"
			+ " a partir do método criado no serviço")
	@GetMapping("/faixasEtarias")
	public List<Integer> pegarListaFaixaEtaria()
	{
		return service.listaFaixaEtaria();
	}
	
	@ApiOperation(value ="Retorna uma lista dos nomes de bairros"
			+ " cadastrados nos formulários de Pessoas, a partir do método criado no serviço")
	@GetMapping("/nomesBairros")
	public List<String> pegarNomesBairros()
	{
		return service.listaNomeBairros();
	}

}
