package spring.framework.repositories;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.domains.Faculty;

public interface IFacultyRepository extends GraphRepository<Faculty> {
}
