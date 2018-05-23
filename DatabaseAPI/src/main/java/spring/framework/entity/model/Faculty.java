package spring.framework.entity.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.List;

@NodeEntity
@Getter
@Setter
public class Faculty {

    @GraphId
    public Long id;

    public String name;

    @JsonIgnore
    @Relationship(type = "has")
    List<User> users; //students
}
