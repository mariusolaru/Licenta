package spring.framework.entity.repository;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.entity.model.User;

public interface UserRepository extends GraphRepository<User> {

    User getUserByEmail(String email);
    User getUserById(Long id);
    User getUserByEmailAndPassword(String email , String password);
    String getPasswordById(Long id);

}
