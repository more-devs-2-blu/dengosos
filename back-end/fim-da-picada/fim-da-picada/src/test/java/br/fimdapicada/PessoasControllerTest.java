package br.fimdapicada;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import br.fimdapicada.controller.PessoasController;
import br.fimdapicada.dto.PessoasDTO;
import br.fimdapicada.service.PessoasService;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = PessoasController.class)
class PessoasControllerTest {
	
	@Autowired
	 private MockMvc mockMvc;
	
	@MockBean   
	PessoasService service;

	@Test
	public void testGetAllPessoas() throws Exception {
		PessoasDTO pessoa = new PessoasDTO(1,"Samela", "111.042.219-93", 19,
				"Feminino", "C", "89037-506", 60,"Hermann Spernau",
				"Agua Verde", "Blumenau", "SC");
		List<PessoasDTO> pessoaList = List.of(pessoa);
		when(service.getAll()).thenReturn(pessoaList);
		this.mockMvc.perform(get("/api/pessoas"))
				.andExpect(status().isOk());
	}


}
