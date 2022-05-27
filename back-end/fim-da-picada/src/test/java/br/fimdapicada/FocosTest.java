package br.fimdapicada;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import br.fimdapicada.entity.Focos;


class FocosTest {

	@Test
	public void FocosTest() {
	
		Focos focos = new Focos(1,"Focos", "89021-000", 1400,
				"Rua Amazonas", "Garcia", "Blumenau", "SC","foto1.jpg");
		assertEquals(1, focos.getId());
		assertEquals("Focos", focos.getDescricao());
		assertEquals(1400, focos.getNumeroEndereco());
		assertEquals("Rua Amazonas", focos.getLogradouro());
		assertEquals("Garcia",focos.getBairro());
		assertEquals("Blumenau", focos.getLocalidade());
		assertEquals("SC", focos.getUf());
		assertEquals("foto1.jpg", focos.getFoto());

	}				
}