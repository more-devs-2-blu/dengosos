package com.dengue.api.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dengue.api.dto.PessoasDTO;
import com.dengue.api.entity.Pessoas;
import com.dengue.api.repository.PessoasRepository;

@Service
public class PessoasService {

	@Autowired
	PessoasRepository repository;

	public List<PessoasDTO> getAll() {
		List<Pessoas> pessoas = repository.findAll();
		List<PessoasDTO> listDTOs = new ArrayList();

		for (Pessoas pessoa : pessoas) {
			listDTOs.add(pessoa.getDTO());
		}
		return listDTOs;
	}

	public PessoasDTO getById(Integer id) throws Exception {
		Pessoas pessoa = repository.findById(id).orElseThrow(() -> new Exception("não encontrado"));
		return pessoa.getDTO();
	}

	public PessoasDTO save(PessoasDTO dto) {
		Pessoas pessoa = repository.save(dto.convertDtoToEntiy());
		return pessoa.getDTO();
	}

	public Boolean delete(Integer idPessoas) throws Exception {
		Pessoas pessoa = repository.findById(idPessoas).orElseThrow(() -> new Exception("Categoria não encontrada"));
		repository.delete(pessoa);
		return true;
	}

	//Filtragem por status
	public List<PessoasDTO> getPessoasByStatus(String statusPessoas) {
		List<PessoasDTO> listaPessoasDTO = this.getAll();
		List<PessoasDTO> pessoasByStatus = new ArrayList<>();

		for (PessoasDTO pessoasDTO : listaPessoasDTO) {
			if (pessoasDTO.getStatusPessoas().equals(statusPessoas)) {
				pessoasByStatus.add(pessoasDTO);
			}
		}
		return pessoasByStatus;
	}
	
}
