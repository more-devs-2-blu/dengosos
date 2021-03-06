package br.fimdapicada.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import br.fimdapicada.config.FileStorageConfig;
import br.fimdapicada.exception.FileStorageException;
import br.fimdapicada.exception.MyFileStorageException;


@Service
public class FileStorageService {

	// local em que será armazenado
	private final Path fileStorageLocation;

	@Autowired
	public FileStorageService(FileStorageConfig fileStorageConfig) {
		this.fileStorageLocation = Paths.get(fileStorageConfig.getUploadDir()).toAbsolutePath().normalize();
		try { // se o diretorio nao existir ele criará o diretório
			Files.createDirectories(this.fileStorageLocation);
		} catch (Exception e) {
			throw new FileStorageException("Não pode criar o diretório em que os arquivos serão armazenados", e);
		}
	}

	// recebe via controller e válida se o nome é aceito, se for ele define o
	// tamanho desse arquivo como o atributo uploadDir
	public String storeFile(MultipartFile file) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		String[] split = fileName.split("\\.");
		long miliSegundo = System.currentTimeMillis();
		fileName = split[0] + miliSegundo + "." + split[1];
		try {
			if (fileName.contains("..")) {
				throw new FileStorageException("O nome do arquivo contém sequencia errada" + fileName);
			}
			Path targetLocation = this.fileStorageLocation.resolve(fileName);
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
			return fileName;
		} catch (Exception e) {
			throw new FileStorageException("Não pode achar o arquivo" + fileName + " tente novamente ", e);
		}
	}

	public Resource loadFileAsResource(String fileName) {
		try {
			Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
			Resource resource = new UrlResource(filePath.toUri());
			if (resource.exists()) {
				return resource;
			} else {
				throw new MyFileStorageException("Arquivo não encontrado " + fileName);
			}
		} catch (Exception e) {
			throw new MyFileStorageException("Arquivo não encontrado " + fileName);
		}
	}
}