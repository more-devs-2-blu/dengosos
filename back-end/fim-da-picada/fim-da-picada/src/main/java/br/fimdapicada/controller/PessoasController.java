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

@CrossOrigin("*")
@RestController
@RequestMapping("/api/pessoas")
public class PessoasController {

	@Autowired
	PessoasService service;

	@GetMapping
	public List<PessoasDTO> getAll() {
		return service.getAll();
	}

	@GetMapping("/{id}")
	public PessoasDTO getById(@PathVariable("id") Integer id) throws Exception {
		return service.getById(id);
	}

	@PostMapping
	public ResponseEntity<PessoasDTO> save(@RequestBody PessoasDTO pessoa) {
		return new ResponseEntity<PessoasDTO>(service.save(pessoa), HttpStatus.CREATED);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") Integer idPessoas) throws Exception {
		return new ResponseEntity<>(service.delete(idPessoas), HttpStatus.OK);

	}
	
	@GetMapping("/quantidadeCasos")
	public List<Integer> pegarQtdCasosPorBairro()
	{
		return service.qtdPessoasPorBairro();
	}
	
	@GetMapping("/faixasEtarias")
	public List<Integer> pegarListaFaixaEtaria()
	{
		return service.listaFaixaEtaria();
	}
	
	@GetMapping("/nomesBairros")
	public List<String> pegarNomesBairros()
	{
		return service.listaNomeBairros();
	}

}
