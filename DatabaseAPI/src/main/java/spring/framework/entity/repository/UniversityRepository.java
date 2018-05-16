package spring.framework.entity.repository;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.entity.model.University;

public interface UniversityRepository extends GraphRepository<University> {
}
