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

    @Query("MATCH (n1:User)-[:follows]->(n2:User)-[:follows]->(n3:User) WHERE id(n1)={0} RETURN n3")
    List<User> getFollowingsFollowings(Long id);

    @Query("MATCH (n:User)-[:belongs]->(f:Faculty) WHERE f.name={0} RETURN n")
    List<User> getUsersFacultyColleagues(String faculty);

    @Query("MATCH (n:User) WHERE n.graduationYear={0} RETURN n")
    List<User> getUsersGenerationColleagues(Integer graduationYear);

    ActivityDomain getActivityDomainById(Long id);
    Faculty getGraduatedFacultyById(Long id);


}
