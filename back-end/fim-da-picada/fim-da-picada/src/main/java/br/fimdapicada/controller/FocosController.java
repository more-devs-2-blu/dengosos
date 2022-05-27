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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.fimdapicada.dto.FocosDTO;
import br.fimdapicada.dto.UploadFileResponseDTO;
import br.fimdapicada.service.FileStorageService;
import br.fimdapicada.service.FocosService;
import io.swagger.annotations.ApiOperation;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/focos")
public class FocosController {

	@Autowired
	FocosService service;

	@Autowired
	private FileStorageService fileStorageService;
	
	@ApiOperation(value = "Edita o formulário de Focos atribuindo uma imagem a ele")
	//put foco barra id barra foto
	@PutMapping("/{id}/foto")
	public UploadFileResponseDTO uploadFile(@RequestParam("file") MultipartFile file, @PathVariable("id") Integer id) throws Exception {
		
		FocosDTO foco = service.getById(id);
		
		String fileName = fileStorageService.storeFile(file);
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/file/downloadFile/")
				.path(fileName).toUriString();
		
		foco.setFoto(fileDownloadUri);
		service.save(foco);

		return new UploadFileResponseDTO(fileName, fileDownloadUri, foco.getIdFocos(), file.getContentType(), file.getSize());
	}

	@ApiOperation(value = "Retorna uma lista com todos os Formulários cadastrados de Focos")
	@GetMapping
	public List<FocosDTO> getAll() {
		return service.getAll();
	}

	@ApiOperation(value = "Retorna um formulário de Foco cadastrado pelo seu Id")
	@GetMapping("/{id}")
	public FocosDTO getById(@PathVariable("id") Integer id) throws Exception {
		return service.getById(id);
	}

	@ApiOperation(value = "Salva um formulário de Foco")
	@PostMapping
	public ResponseEntity<FocosDTO> save(@RequestBody FocosDTO foco) {
		FocosDTO dto = service.save(foco);

		return new ResponseEntity<FocosDTO>(dto, HttpStatus.CREATED);

	}

	@ApiOperation(value = "Deleta um formulário de Foco pelo seu Id")
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") Integer idfoco) throws Exception {
		return new ResponseEntity<>(service.delete(idfoco), HttpStatus.OK);

	}

	@ApiOperation(value = "Edita o Foco escolhido passando seu Id, incrementando com"
			+ " o nome de um arquivo passado em seguida")
	@PutMapping("/foto/{idFoco}/{nameFoto}")
	public ResponseEntity<FocosDTO> editPhoto(@PathVariable("idFoco") Integer idFoco,
			@PathVariable("nameFoto") String nameFoto) throws Exception {

		FocosDTO foco = service.getById(idFoco);
		foco.setFoto(nameFoto);

		return new ResponseEntity<>(service.save(foco), HttpStatus.OK);
	}

	@ApiOperation(value = "Retorna uma lista de quantidade de Focos por Bairro, "
			+ " a partir do método criado no serviço")
	@GetMapping("/quantidadeFocos")
	public List<Integer> pegarQtdFocosBairro() {
		return service.qtdFocosPorBairro();
	}

	@ApiOperation(value ="Retorna uma lista dos nomes de bairros"
			+ " cadastrados nos formulários de Focos, a partir do método criado no serviço")
	@GetMapping("/nomesBairros")
	public List<String> pegarNomesBairros() {
		return service.listaNomeBairros();
	}

}