package spring.framework.boundry.controllers;

import org.apache.commons.io.FilenameUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import spring.framework.boundry.dto.PostDTO;
import spring.framework.boundry.exceptions.BadRequestException;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.StorageService;
import spring.framework.control.service.interfaces.PostService;
import spring.framework.control.service.interfaces.UserService;
import spring.framework.entity.model.Post;
import spring.framework.entity.model.User;
import spring.framework.utils.Constants;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value="posts")
public class PostController {

    private PostService postService;
    private UserService userService;
    private StorageService storageService;
    private ModelMapper modelMapper;

    @Autowired
    public PostController(PostService postService, UserService userService ,
                          StorageService storageService , ModelMapper modelMapper){
        this.postService = postService;
        this.userService = userService;
        this.storageService = storageService;
        this.modelMapper = modelMapper;
    }

    /**
     * Endpoint for getting all posts from database
     * @return A list of posts
     */
    @GetMapping
    public @ResponseBody ResponseEntity<List<Post>> getAllPosts() {
        return new ResponseEntity<>(postService.listAll(), HttpStatus.OK);
    }

    /**
     * Endpoint for getting a post based on its id in the database.
     * @param id The `id` in the database of the targeted post.
     * @return A 'Post` object representing the entry in the DB with id `id`
     * @throws NotFoundException if targeted post doesn't exist
     */
    @GetMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Post> getPost(@PathVariable("id") Long id) throws NotFoundException {
        Post post = postService.getById(id);
        if (post == null) {
            throw new NotFoundException(String.format("Post with id=%s was not found.", id));
        }

        return new ResponseEntity<>(post, HttpStatus.OK);
    }

    /**
     * Endpoint for creating a post
     * @return Created at route
     * @throws URISyntaxException
     */
    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public @ResponseBody ResponseEntity<Post> addPost(@RequestParam("file") MultipartFile file ,
                                                      @RequestParam("userId") String userId ,
                                                      @RequestParam("content") String content) throws URISyntaxException, NotFoundException {

        User user = userService.getById(Long.valueOf(userId));

        String fileSavedName = user.getEmail() + "_" + new Date().getTime() + "." + FilenameUtils.getExtension(file.getOriginalFilename());

        Post newPost = new Post();
        //modelMapper.map(postDto , newPost);
        newPost.setContent(content);
        newPost.setPostingDate(new Date());
        newPost.setPhotoAttachedPath(fileSavedName);
        user.getPosts().add(newPost);
        newPost.setUser(user);
        userService.updateUser(user);

        storageService.store(file , user.getEmail() , fileSavedName);

        return ResponseEntity.created(new URI("/posts/" + postService.save(newPost).getId())).body(newPost);
    }

    /**
     * Endpoint for updating a post based on its id in the database.
     * @param id The `id` in the database of the targeted post
     * @param postDto A json with the new version of the post.
     * @return A `Post` object representing the updated entry in the DB
     * @throws BadRequestException if id's aren't the same
     * @throws NotFoundException if targeted post to be updated was not found
     */
    @PutMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Post> updatePost(@PathVariable("id") Long id, @RequestBody PostDTO postDto) throws BadRequestException, NotFoundException {
        Post postDb = postService.getById(id);

        if (postDb == null) {
            throw new NotFoundException(String.format("Post with id=%s was not found.", id));
        }

        modelMapper.map(postDto , postDb);

        return new ResponseEntity<>(postService.updatePost(postDb) , HttpStatus.ACCEPTED);
    }


    /**
     * Endpoint for deleting a post from database
     * @param id Id of targeted post
     * @return No content
     * @throws NotFoundException if the targeted post was not found
     */
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deletePost(@PathVariable Long id) throws NotFoundException {
        Post postDb = postService.getById(id);
        if (postDb == null) {
            throw new NotFoundException(String.format("Post with id=%s was not found.", id));
        }
        postService.delete(postDb.getId());

        return ResponseEntity.noContent().build();
    }

    @GetMapping(value = "/filter/{id}")
    public @ResponseBody ResponseEntity<List<Post>> getPostsByUserId(@PathVariable("id") Long id) {
        User user = userService.getById(id);
        return new ResponseEntity<>(user.getPosts(), HttpStatus.OK);
    }


}
