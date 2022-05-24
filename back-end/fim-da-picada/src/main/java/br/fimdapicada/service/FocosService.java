package br.fimdapicada.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.fimdapicada.dto.FocosDTO;
import br.fimdapicada.entity.Focos;
import br.fimdapicada.repository.FocosRepository;

@Service
public class FocosService {

	@Autowired
	FocosRepository repository;

	public List<FocosDTO> getAll() {
		List<Focos> focos = repository.findAll();
		List<FocosDTO> listDTOs = new ArrayList();

		for (Focos foco : focos) {
			listDTOs.add(foco.getDTO());
		}
		return listDTOs;
	}

	public FocosDTO getById(Integer id) throws Exception {
		Focos foco = repository.findById(id).orElseThrow(() -> new Exception("não encontrado"));
		return foco.getDTO();
	}

	public FocosDTO save(FocosDTO dto) {
		Focos foco = repository.save(dto.convertDtoToEntiy());
		return foco.getDTO();
	}

	public Boolean delete(Integer idFoco) throws Exception {
		Focos foco = repository.findById(idFoco).orElseThrow(() -> new Exception("Categoria não encontrada"));
		repository.delete(foco);
		return true;
	}

}