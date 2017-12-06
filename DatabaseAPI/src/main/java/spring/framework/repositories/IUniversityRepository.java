package spring.framework.repositories;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.domains.University;

public interface IUniversityRepository extends GraphRepository<University> {
}
