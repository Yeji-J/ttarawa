package com.jsdckj.ttarawa.file.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileUploadService {

  String uploadFile(String dirName, MultipartFile multipartFile) throws IOException;

}