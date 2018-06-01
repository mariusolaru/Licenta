package spring.framework.entity.repository;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.entity.model.ActivityDomain;

public interface ActivityDomainRepository extends GraphRepository<ActivityDomain>{

    ActivityDomain getActivityDomainByName(String name);

}
