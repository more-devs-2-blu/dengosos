package br.fimdapicada;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import br.fimdapicada.config.FileStorageConfig;

@EnableConfigurationProperties({
	FileStorageConfig.class
})
@SpringBootApplication
public class FimDaPicadaApplication {

	public static void main(String[] args) {
		SpringApplication.run(FimDaPicadaApplication.class, args);
	}

}
