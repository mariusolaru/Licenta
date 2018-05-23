package spring.framework.entity.repository;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.entity.model.Post;

public interface PostRepository extends GraphRepository<Post> {
}
