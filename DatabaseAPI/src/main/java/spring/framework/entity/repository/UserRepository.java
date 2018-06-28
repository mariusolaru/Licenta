package spring.framework.entity.repository;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.entity.model.ActivityDomain;
import spring.framework.entity.model.Faculty;
import spring.framework.entity.model.LastStudyType;
import spring.framework.entity.model.User;

import java.util.List;

public interface UserRepository extends GraphRepository<User> {

    User getUserByEmail(String email);
    User getUserById(Long id);
    User getUserByEmailAndPassword(String email , String password);
    String getPasswordById(Long id);

    @Query("MATCH (n1:User)-[r1:follows]->(n2:User)-[r2:follows]->(n3:User)-[r] -(x) RETURN n3")
    List<User> getFollowingsFollowings(Long id);

    ActivityDomain getActivityDomainById(Long id);
    Faculty getGraduatedFacultyById(Long id);


}
