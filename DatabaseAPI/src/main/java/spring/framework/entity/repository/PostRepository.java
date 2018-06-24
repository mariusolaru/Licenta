package spring.framework.entity.repository;

import org.springframework.data.neo4j.repository.GraphRepository;
import spring.framework.entity.model.Post;

import java.util.Date;
import java.util.List;

public interface PostRepository extends GraphRepository<Post> {

    List<Post> getPostsByUserId(Long userId);

    List<Post> getPostsByPostingDateGreaterThanEqual(Date date);

}




