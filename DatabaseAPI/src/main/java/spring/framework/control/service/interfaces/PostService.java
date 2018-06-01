package spring.framework.control.service.interfaces;

import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.entity.model.Post;

import java.util.List;

public interface PostService {

    List<Post> listAll();

    Post getById(Long id);

    Post save(Post post);

    Post updatePost(Post post) throws NotFoundException;

    void delete(Long id);

    List<Post> getPostsByUserId(Long id);

}
