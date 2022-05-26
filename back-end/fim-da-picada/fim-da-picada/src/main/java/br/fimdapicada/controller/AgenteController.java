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

import br.fimdapicada.dto.AgenteDTO;
import br.fimdapicada.dto.FocosDTO;
import br.fimdapicada.service.AgenteService;
import br.fimdapicada.service.FocosService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/login")
public class AgenteController {
	
	
	@Autowired
	AgenteService service;

	@GetMapping
	public List<AgenteDTO> getAll() {
		return service.getAll();
	}

	@GetMapping("/{id}")
	public AgenteDTO getById(@PathVariable("id") Integer id) throws Exception {
		return service.getById(id);
	}

	@PostMapping
	public ResponseEntity<AgenteDTO> save(@RequestBody AgenteDTO agente) {
		return new ResponseEntity<AgenteDTO>(service.save(agente), HttpStatus.CREATED);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") Integer idagente) throws Exception {
		return new ResponseEntity<>(service.delete(idagente), HttpStatus.OK);

	}

}
