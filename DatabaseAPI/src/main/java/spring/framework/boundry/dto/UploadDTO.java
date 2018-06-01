package spring.framework.boundry.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class UploadDTO {

    private String userEmail;
    private String fileSavedName;

}
