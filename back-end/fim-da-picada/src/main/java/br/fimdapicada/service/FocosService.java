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
	
	public List<Integer> qtdFocosPorBairro()
	{
		List<FocosDTO> listaFocosDTO = this.getAll();
		
		List<Integer> listaFocosNoBairro = new ArrayList<>();
		
		List<String> nomesBairros = this.listaNomeBairros();
		
		int qtdFocosBairro = 0;
		
		for (String nomeBairro: nomesBairros)
		{
			for (FocosDTO foco: listaFocosDTO)
			{
				if (foco.getBairroFocos().equals(nomeBairro))
				{
					qtdFocosBairro++;
				}
			}
			listaFocosNoBairro.add(qtdFocosBairro);
			qtdFocosBairro = 0;
		}
		return listaFocosNoBairro;
	}
	
	public List<String> listaNomeBairros()
	{
		List<FocosDTO> listaFocosDTO = this.getAll();
		List<String> nomesBairros = new ArrayList<>();
		
		for (FocosDTO focoDTO: listaFocosDTO)
		{
			if (!(nomesBairros.contains(focoDTO.getBairroFocos())))
			{
				nomesBairros.add(focoDTO.getBairroFocos());
			}
		}
		return nomesBairros;
	}


}