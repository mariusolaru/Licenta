package spring.framework.entity.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.Date;

@NodeEntity
@Getter
@Setter
public class Post {

    @GraphId
    public Long id;

    public String content;

    public String photoAttachedPath;

    public Date postingDate;

    @JsonIgnore
    @Relationship(type = "by" , direction = Relationship.OUTGOING)
    public User user;

}
