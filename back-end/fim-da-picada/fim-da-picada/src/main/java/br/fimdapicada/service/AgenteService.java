package br.fimdapicada.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.fimdapicada.dto.AgenteDTO;
import br.fimdapicada.entity.Agente;
import br.fimdapicada.repository.AgenteRepository;

@Service
public class AgenteService {
	
	@Autowired
	AgenteRepository repository;

	public List<AgenteDTO> getAll() {
		List<Agente> agentes = repository.findAll();
		List<AgenteDTO> listDTOs = new ArrayList();

		for (Agente agente : agentes) {
			listDTOs.add(agente.getDTO());
		}
		return listDTOs;
	}

	public AgenteDTO getById(Integer id) throws Exception {
		Agente agente = repository.findById(id).orElseThrow(() -> new Exception("não encontrado"));
		return agente.getDTO();
	}

	public AgenteDTO save(AgenteDTO dto) {
		Agente agente = repository.save(dto.convertDtoToEntiy());
		return agente.getDTO();
	}

	public Boolean delete(Integer idAgente) throws Exception {
		Agente agente = repository.findById(idAgente).orElseThrow(() -> new Exception("Categoria não encontrada"));
		repository.delete(agente);
		return true;
	}

}
