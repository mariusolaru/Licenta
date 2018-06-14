package spring.framework.boundry.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class CronologyPostDTO {

    private Long userId;
    private String profilePicturePath;
    private String userFirstName;
    private String userLastName;
    private String content;
    private String photoAttached;
    private Date postingDate;

}
