package spring.framework.entity.model;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;

import java.util.Date;

@NodeEntity
@Getter
@Setter
public class Post {

    @GraphId
    public Long id;

    public String userPhoto;

    public String userFirstName;

    public String userLastName;

    public String content;

    public String photoAttached;

    public Date postingDate;

}
