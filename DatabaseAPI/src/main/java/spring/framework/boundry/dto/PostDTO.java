package spring.framework.boundry.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class PostDTO {

    private Long id;
    private Long userId;
    private String content;
    private String photoAttached;
    private Date postingDate;
}
