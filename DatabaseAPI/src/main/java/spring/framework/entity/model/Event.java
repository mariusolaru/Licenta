package spring.framework.entity.model;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;

import java.util.Date;

@NodeEntity
@Getter
@Setter
public class Event {

    @GraphId
    public Long id;

    public String title;

    public String content;

    public Date postingDate;

}
