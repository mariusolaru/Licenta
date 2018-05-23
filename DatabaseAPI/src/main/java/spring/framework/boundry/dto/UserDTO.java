package spring.framework.boundry.dto;

import lombok.Getter;
import lombok.Setter;
import spring.framework.entity.model.Faculty;

import java.util.Date;

@Getter
@Setter
public class UserDTO {

    private Long id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Date birthday;
    private String graduatedFaculty;
    private Integer graduationYear;
    private String lastStudyType;
    private String phoneNumber;
    private String gender;
    private String address;
    private String locality;
    private String county;
    private String zipCode;
    private String country;
    private String activityDomain;
    private String companyName;
    private String job;
    private String anotherInstitution;

}
