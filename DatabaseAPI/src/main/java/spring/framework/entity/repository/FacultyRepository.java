package spring.framework.entity.repository;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.entity.model.Faculty;

public interface FacultyRepository extends GraphRepository<Faculty> {

    Faculty getFacultyByName(String name);

}
