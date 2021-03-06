package spring.framework.entity.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.org.apache.regexp.internal.RE;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Email;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NodeEntity
@Getter
@Setter
public class User {

    @GraphId
    public Long id;

    private String firstname;

    private String lastname;

    @Email
    private String email;

    @JsonIgnore
    private String password;

    private Date birthday;

    @Relationship(type ="belongs" , direction = Relationship.OUTGOING)
    private Faculty graduatedFaculty;

    private Integer graduationYear;

    @Relationship(type = "last_studied" , direction = Relationship.OUTGOING)
    private LastStudyType lastStudyType;

    private String phoneNumber;

    private String gender;

    private String address;

    private String locality;

    private String county;

    private String zipCode;

    private String country;

    @Relationship(type="works" , direction = Relationship.OUTGOING)
    private ActivityDomain activityDomain;

    private String companyName;

    private String job;

    private String anotherInstitution;

    private String profilePicturePath;

    private String facebookUrl;

    private String twitterUrl;

    private String linkedinUrl;

    private String instagramUrl;

    private String userRole;

    @JsonIgnore
    @Relationship(type = "has" , direction = Relationship.OUTGOING)
    private List<Post> posts = new ArrayList<>();

    @JsonIgnore
    @Relationship(type = "wrote" , direction = Relationship.OUTGOING)
    private List<Article> articles = new ArrayList<>();

    @JsonIgnore
    @Relationship(type = "created" , direction = Relationship.OUTGOING)
    private List<Event> events = new ArrayList<>();

    @JsonIgnore
    @Relationship(type="follows", direction = Relationship.OUTGOING)
    private List<User> follows = new ArrayList<>();

    @JsonIgnore
    @Relationship(type="followed_by", direction = Relationship.OUTGOING)
    private List<User> isFollowedBy = new ArrayList<>();

}