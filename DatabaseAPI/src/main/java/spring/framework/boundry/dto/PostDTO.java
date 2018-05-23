package spring.framework.boundry.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class PostDTO {

    private Long id;
    private String userPhoto;
    private String userFirstName;
    private String userLastName;
    private String userEmail;
    private String content;
    private String photoAttached;
    private Date postingDate;
}
