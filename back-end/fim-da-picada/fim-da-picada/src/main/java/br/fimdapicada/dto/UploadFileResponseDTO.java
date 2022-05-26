package br.fimdapicada.dto;

import java.io.Serializable;
import java.util.List;

public class UploadFileResponseDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String fileName;
	private String fileDownloadUri;
	private String fileType;
	private long size;

	public UploadFileResponseDTO(String fileName, String fileDownloadUri, String fileType, long size) {
		super();
		this.fileDownloadUri = fileDownloadUri;
		this.fileType = fileType;
		this.size = size;
		
		String[] split = fileName.split("\\.");
		long miliSegundo = System.currentTimeMillis();
		this.fileName = split[0] + miliSegundo + "." + split[1];

	}

	public UploadFileResponseDTO() {
		super();
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
