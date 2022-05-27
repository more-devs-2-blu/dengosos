package br.fimdapicada.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.fimdapicada.dto.PessoasDTO;
import br.fimdapicada.entity.Pessoas;
import br.fimdapicada.repository.PessoasRepository;

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
	public List<PessoasDTO> getPessoasByStatus(String statusPessoas) 	
	{
		List<PessoasDTO> listaPessoasDTO = this.getAll();
		List<PessoasDTO> pessoasByStatus = new ArrayList<>();

		for (PessoasDTO pessoasDTO : listaPessoasDTO) {
			if (pessoasDTO.getStatusPessoas().equals(statusPessoas)) 			
			{
				pessoasByStatus.add(pessoasDTO);
			}
		}
		return pessoasByStatus;
	}
	
	
	public List<Integer> qtdPessoasPorBairro()
	{
		List<PessoasDTO> listaPessoasDTO = this.getAll();
		
		List<Integer> listaPessoasNoBairro = new ArrayList<>();
		
		List<String> nomesBairros = this.listaNomeBairros();
		
		int qtdPessoasBairro = 0;
		
		for (String nomeBairro: nomesBairros)
		{
			for (PessoasDTO pessoa: listaPessoasDTO)
			{
				if (pessoa.getBairroPessoas().equals(nomeBairro))
				{
					qtdPessoasBairro++;
				}
			}
			listaPessoasNoBairro.add(qtdPessoasBairro);
			qtdPessoasBairro = 0;
		}
		return listaPessoasNoBairro;
	}

	public List<String> listaNomeBairros()
	{
		List<PessoasDTO> listaPessoasDTO = this.getAll();
		List<String> nomesBairros = new ArrayList<>();
		
		for (PessoasDTO pessoaDTO: listaPessoasDTO)
		{
			if (!(nomesBairros.contains(pessoaDTO.getBairroPessoas())))
			{
				nomesBairros.add(pessoaDTO.getBairroPessoas());
			}
		}
		return nomesBairros;
	}

	public List<Integer> listaFaixaEtaria() 
	{
		List<Pessoas> pessoas = repository.findAll();
		List<PessoasDTO> listDTOs = new ArrayList();

		for (Pessoas pessoa : pessoas) {
			listDTOs.add(pessoa.getDTO());
		}
		
		List<Integer> listaFaixaEtaria = new ArrayList<>();
		
		Integer idade15 = Integer.valueOf(15);
		Integer idade30 = Integer.valueOf(30);
		Integer idade45 = Integer.valueOf(45);
		Integer idade60 = Integer.valueOf(60);
		Integer idade75 = Integer.valueOf(75);
		
		int idade1 = 0;
		int idade2 = 0;
		int idade3 = 0;
		int idade4 = 0;
		int idade5 = 0;
		int idade6 = 0;
		
		for (PessoasDTO pessoaDTO : listDTOs) 
		{
			// compara se a idade é maior que 75
			if (pessoaDTO.getIdadePessoas().compareTo(idade75) > 0) 			
			{
				idade6++;
			}
			// compara se a idade é menor ou igual a 75 e maior que 60
			if (pessoaDTO.getIdadePessoas().compareTo(idade75) <= 0 && pessoaDTO.getIdadePessoas().compareTo(idade60) > 0) 			
			{
				idade5++;
			}
			// compara se é menor ou igual que 60 e maior que 45
			if (pessoaDTO.getIdadePessoas().compareTo(idade60) <= 0 && pessoaDTO.getIdadePessoas().compareTo(idade45) > 0) 			
			{
				idade4++;
			}
			// compara se a idade é menor ou igual que 45 e maior que 30
			if (pessoaDTO.getIdadePessoas().compareTo(idade45) <= 0 && pessoaDTO.getIdadePessoas().compareTo(idade30) > 0) 			
			{
				idade3++;
			}
			// compara se a idade é menor ou igual que 30 e maior que 15
			if (pessoaDTO.getIdadePessoas().compareTo(idade30) <= 0 && pessoaDTO.getIdadePessoas().compareTo(idade15) > 0) 			
			{
				idade2++;
			}
			// se a idade da pessoa for menor ou igual que 15
			if (pessoaDTO.getIdadePessoas().compareTo(idade15) <= 0) 			
			{
				idade1++;
			}
		}
		
		listaFaixaEtaria.add(idade1);
		listaFaixaEtaria.add(idade2);
		listaFaixaEtaria.add(idade3);
		listaFaixaEtaria.add(idade4);
		listaFaixaEtaria.add(idade5);
		listaFaixaEtaria.add(idade6);
		
		idade1 = 0;
		idade2 = 0;
		idade3 = 0;
		idade4 = 0;
		idade5 = 0;
		idade6 = 0;
		
		return listaFaixaEtaria;
	}
}
