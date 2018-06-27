package spring.framework.control.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.boundry.dto.CronologyPostDTO;
import spring.framework.boundry.dto.PostDTO;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.interfaces.PostService;
import spring.framework.control.service.interfaces.UserService;
import spring.framework.entity.model.Post;
import spring.framework.entity.model.User;
import spring.framework.entity.repository.PostRepository;
import spring.framework.entity.repository.UserRepository;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;

@Service
public class PostServiceImpl implements PostService {

    private PostRepository postRepository;
    private UserService userService;

    @Autowired
    public PostServiceImpl(PostRepository postRepository, UserService userService){
        this.postRepository = postRepository;
        this.userService = userService;
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

    @Override
    public List<Post> getPostsByUserId(Long id) {

        return postRepository.getPostsByUserId(id);
    }

    @Override
    public List<CronologyPostDTO> getCronologyPosts(Long userId) {
        LocalDate date = LocalDate.now().minusDays(7);
        Date lastWeek = Date.from(date.atStartOfDay(ZoneId.systemDefault()).toInstant());
        List<Post> allPosts = postRepository.getPostsByPostingDateGreaterThanEqual(lastWeek);

        List<CronologyPostDTO> cronologyPosts = new ArrayList<>();
        for(Post post : allPosts){
            if(!post.getUser().getId().equals(userId)) {
                CronologyPostDTO cronologyPost = new CronologyPostDTO();
                cronologyPost.setContent(post.getContent());
                cronologyPost.setPostingDate(post.getPostingDate());
                cronologyPost.setPhotoAttached(post.getPhotoAttachedPath());
                cronologyPost.setUserId(post.getUser().getId());
                cronologyPost.setProfilePicturePath(post.getUser().getProfilePicturePath());
                cronologyPost.setUserFirstName(post.getUser().getFirstname());
                cronologyPost.setUserLastName(post.getUser().getLastname());

                cronologyPosts.add(cronologyPost);
            }
        }

        return cronologyPosts;

    }

    @Override
    public List<CronologyPostDTO> getFollowPosts(Long id) {
        User user = userService.getById(id);

        List<User> followedUsers = user.getFollows();
        List<CronologyPostDTO> followedUsersPosts = new ArrayList<>();

        for(User userIt : followedUsers){
            User tempUser = userService.getById(userIt.getId());
            List<Post> usersPosts = tempUser.getPosts();
            for(Post post : usersPosts){
                CronologyPostDTO cronologyPost = new CronologyPostDTO();
                cronologyPost.setContent(post.getContent());
                cronologyPost.setPostingDate(post.getPostingDate());
                cronologyPost.setPhotoAttached(post.getPhotoAttachedPath());
                cronologyPost.setUserId(post.getUser().getId());
                cronologyPost.setProfilePicturePath(post.getUser().getProfilePicturePath());
                cronologyPost.setUserFirstName(post.getUser().getFirstname());
                cronologyPost.setUserLastName(post.getUser().getLastname());

                followedUsersPosts.add(cronologyPost);
            }
        }

        return followedUsersPosts;

    }

}
