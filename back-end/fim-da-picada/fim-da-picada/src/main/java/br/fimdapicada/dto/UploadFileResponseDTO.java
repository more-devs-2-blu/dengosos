package br.fimdapicada.dto;

import java.io.Serializable;

import io.swagger.annotations.ApiModelProperty;

public class UploadFileResponseDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	@ApiModelProperty(value = "Nome do Arquivo")
	private String fileName;

	private String fileDownloadUri;
	private Integer IdFoco;
	private String fileType;
	private long size;

	public UploadFileResponseDTO(String fileName, String fileDownloadUri, Integer idFoco, String fileType, long size) {
		super();
		this.fileName = fileName;
		this.fileDownloadUri = fileDownloadUri;
		this.fileType = fileType;
		IdFoco = idFoco;
		this.size = size;
	}

	public UploadFileResponseDTO() {
		super();
	}

	public Integer getIdFoco() {
		return IdFoco;
	}

	public void setIdFoco(Integer idFoco) {
		IdFoco = idFoco;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileDownloadUri() {
		return fileDownloadUri;
	}

	public void setFileDownloadUri(String fileDownloadUri) {
		this.fileDownloadUri = fileDownloadUri;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public long getSize() {
		return size;
	}

	public void setSize(long size) {
		this.size = size;
	}
}
