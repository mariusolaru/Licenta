package spring.framework.boundry.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FollowDTO {

    private Long userId;
    private Long followedUserId;

}
