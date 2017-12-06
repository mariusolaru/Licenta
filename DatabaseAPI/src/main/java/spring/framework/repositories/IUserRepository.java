package spring.framework.repositories;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.domains.User;

public interface IUserRepository extends GraphRepository<User> {
}
