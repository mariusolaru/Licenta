package spring.framework.entity.repository;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.entity.model.LastStudyType;

public interface LastStudyTypeRepository extends GraphRepository<LastStudyType>{

    LastStudyType getLastStudyTypeByName(String name);

}
