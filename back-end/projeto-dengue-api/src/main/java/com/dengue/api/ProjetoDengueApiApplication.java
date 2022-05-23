package com.dengue.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.dengue.api.config.FileStorageConfig;


@EnableConfigurationProperties({
	FileStorageConfig.class
})
@SpringBootApplication
public class ProjetoDengueApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoDengueApiApplication.class, args);
	}

}
