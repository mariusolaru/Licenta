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
public class Article {

    @GraphId
    public Long id;

    public String title;

    public String content;

    public Date postingDate;

}
