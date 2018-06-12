package spring.framework.entity.repository;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.entity.model.Event;

public interface EventRepository extends GraphRepository<Event> {



}
