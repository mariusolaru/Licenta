package spring.framework.entity.model;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.List;

@NodeEntity
@Getter
@Setter
public class University {

    @GraphId
    public Long id;

    public String name;

    public String county;

    public String country;

    @Relationship(type = "contains" , direction = Relationship.OUTGOING)
    public List<Faculty> faculties;

}
