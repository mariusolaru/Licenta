package spring.framework.boundry.dto;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.GraphId;
import spring.framework.entity.model.Faculty;

import java.util.List;

@Getter
@Setter
public class UniversityDTO {

    public Long id;
    public String name;
    public String county;
    public String country;
    public List<Faculty> faculties;

}
