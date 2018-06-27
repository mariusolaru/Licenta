package spring.framework.entity.model;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;

@NodeEntity
@Getter
@Setter
public class LastStudyType {

    @GraphId
    public Long id;

    public String name;
}
