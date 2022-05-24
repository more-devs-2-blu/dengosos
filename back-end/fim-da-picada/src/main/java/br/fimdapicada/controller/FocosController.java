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

import br.fimdapicada.dto.FocosDTO;
import br.fimdapicada.service.FocosService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/focos")
public class FocosController {

	@Autowired
	FocosService service;

	@GetMapping
	public List<FocosDTO> getAll() {
		return service.getAll();
	}

	@GetMapping("/{id}")
	public FocosDTO getById(@PathVariable("id") Integer id) throws Exception {
		return service.getById(id);
	}

	@PostMapping
	public ResponseEntity<FocosDTO> save(@RequestBody FocosDTO foco) {
		return new ResponseEntity<FocosDTO>(service.save(foco), HttpStatus.CREATED);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") Integer idfoco) throws Exception {
		return new ResponseEntity<>(service.delete(idfoco), HttpStatus.OK);

	}

}