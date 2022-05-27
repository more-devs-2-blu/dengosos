package br.fimdapicada;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import br.fimdapicada.entity.Pessoas;

class PessoasTest {

	@Test
	public void PessoasTest() {
		Pessoas pessoa = new Pessoas(1,"Samela", "111.042.219-93", 19,
				"Feminino", "C", "89037-506", 60,"Hermann Spernau",
				"Agua Verde", "Blumenau", "SC");
		assertEquals(1, pessoa.getId());
		assertEquals("Samela", pessoa.getNome());
		assertEquals("111.042.219-93", pessoa.getCpf());
		assertEquals(19, pessoa.getIdade());
		assertEquals("C", pessoa.getStatus());
		assertEquals("89037-506", pessoa.getCep());
		assertEquals("Hermann Spernau", pessoa.getLogradouro());
		assertEquals("Agua Verde", pessoa.getBairro());
		assertEquals("Blumenau", pessoa.getLocalidade());
		assertEquals("SC", pessoa.getUf());
	}

}
