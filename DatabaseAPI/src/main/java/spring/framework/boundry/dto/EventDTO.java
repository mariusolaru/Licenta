package spring.framework.boundry.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class EventDTO {

    private Long userId;
    private String title;
    private String content;
    private Date postingDate;

}
