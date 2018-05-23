package spring.framework.control.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.interfaces.PostService;
import spring.framework.entity.model.Post;
import spring.framework.entity.repository.PostRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    private PostRepository postRepository;

    @Autowired
    public PostServiceImpl(PostRepository postRepository){
        this.postRepository = postRepository;
    }

    @Override
    public List<Post> listAll() {
        List<Post> posts = new ArrayList<>();
        postRepository.findAll().forEach(posts::add);
        return posts;
    }

    @Override
    public Post getById(Long id) {
        return postRepository.findOne(id);
    }

    @Override
    public Post save(Post post) {
        postRepository.save(post);
        return post;
    }

    @Override
    public Post updatePost(Post post) throws NotFoundException {
        if (post.getId() != null) {
            return postRepository.save(post);
        }
        throw new NotFoundException("The post you tried to update doesn't exist");
    }

    @Override
    public void delete(Long id) {
        postRepository.delete(id);
    }

}
