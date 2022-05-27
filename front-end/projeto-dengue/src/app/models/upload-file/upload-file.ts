export class UploadFile
{
  fileName?: string;
	fileDownloadUri?: string;
  fileType?: string;
	size?: number;
  
  constructor(obj: Partial<UploadFile>)
  {
    Object.assign(this, obj);
  }
}
