package spring.framework.entity.repository;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.entity.model.User;

public interface UserRepository extends GraphRepository<User> {

    User getUserByEmail(String email);
    User getUserByEmailAndPassword(String email , String password);

}
