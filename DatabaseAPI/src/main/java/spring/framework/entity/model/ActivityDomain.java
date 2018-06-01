package spring.framework.entity.model;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.springframework.web.bind.annotation.GetMapping;

@NodeEntity
@Getter
@Setter
public class ActivityDomain {

    @GraphId
    public Long id;

    public String name;
}
