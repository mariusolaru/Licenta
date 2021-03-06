package spring.framework.boundry.controllers;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import spring.framework.boundry.dto.FollowDTO;
import spring.framework.boundry.dto.PasswordDTO;
import spring.framework.boundry.dto.UserDTO;
import spring.framework.boundry.exceptions.BadRequestException;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.StorageService;
import spring.framework.control.service.interfaces.ActivityDomainService;
import spring.framework.control.service.interfaces.FacultyService;
import spring.framework.control.service.interfaces.LastStudyTypeService;
import spring.framework.entity.model.ActivityDomain;
import spring.framework.entity.model.Faculty;
import spring.framework.entity.model.LastStudyType;
import spring.framework.entity.model.User;
import spring.framework.control.service.interfaces.UserService;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "users")
public class UserController {

    private UserService userService;
    private FacultyService facultyService;
    private ActivityDomainService activityDomainService;
    private LastStudyTypeService lastStudyTypeService;
    private StorageService storageService;
    private ModelMapper modelMapper;

    @Autowired
    public UserController(UserService userService, FacultyService facultyService ,
                          ActivityDomainService activityDomainService, StorageService storageService ,
                          LastStudyTypeService lastStudyTypeService, ModelMapper modelMapper){
        this.userService = userService;
        this.facultyService = facultyService;
        this.activityDomainService = activityDomainService;
        this.lastStudyTypeService = lastStudyTypeService;
        this.storageService = storageService;
        this.modelMapper = modelMapper;
    }

    /**
     * Endpoint for getting all users from database
     * @return A list of users
     */
    @GetMapping
    public @ResponseBody ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.listAll(), HttpStatus.OK);
    }

    /**
     * Endpoint for getting an user based on its id in the database.
     * @param id The `id` in the database of the targeted user.
     * @return An `User` object representing the entry in the DB with id `id`
     * @throws NotFoundException if targeted user doesn't exist
     */
    @GetMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<User> getUser(@PathVariable("id") Long id) throws NotFoundException {
        User user = userService.getById(id);
        if (user == null) {
            throw new NotFoundException(String.format("User with id=%s was not found.", id));
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping(value = "/follows/{id}")
    public @ResponseBody ResponseEntity<List<User>> getUsersFollows(@PathVariable("id") Long id) throws NotFoundException {
        User user = userService.getById(id);
        if (user == null) {
            throw new NotFoundException(String.format("User with id=%s was not found.", id));
        }

        return new ResponseEntity<>(user.getFollows(), HttpStatus.OK);
    }

    @GetMapping(value = "/followings/{id}")
    public @ResponseBody ResponseEntity<List<User>> getFollowingsFollowings(@PathVariable("id") Long id) throws NotFoundException {
        User user = userService.getById(id);
        if (user == null) {
            throw new NotFoundException(String.format("User with id=%s was not found.", id));
        }

        return new ResponseEntity<>(userService.getFollowingsFollowings(id), HttpStatus.OK);
    }

    /**
     * Endpoint for creating an user
     * @param userDto A json with the new user to be inserted
     * @return Created at route
     * @throws URISyntaxException
     */
    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public @ResponseBody ResponseEntity<User> addUser(@RequestBody UserDTO userDto) throws URISyntaxException {
        Faculty graduatedFaculty = facultyService.getFacultyByName(userDto.getGraduatedFaculty());
        ActivityDomain activityDomain = activityDomainService.getActivityDomainByName(userDto.getActivityDomain());
        LastStudyType lastStudyType = lastStudyTypeService.getLastStudyTypeByName(userDto.getLastStudyType());
        User newUser = new User();
        modelMapper.map(userDto , newUser);
        newUser.setGraduatedFaculty(graduatedFaculty);
        newUser.setActivityDomain(activityDomain);
        newUser.setLastStudyType(lastStudyType);
        newUser.setProfilePicturePath("first_prof_pic.png");
        newUser.setUserRole("user");

        Path rootLocation = Paths.get("upload-dir\\" + newUser.getEmail());
        storageService.init(rootLocation);

        File source = new File("upload-dir\\first_prof_pic.png");
        File dest = new File("upload-dir\\" + newUser.getEmail());
        try {
            FileUtils.copyFileToDirectory(source, dest);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return ResponseEntity.created(new URI("/users/" + userService.save(newUser).getId())).body(newUser);
    }

    /**
     * Endpoint for updating an user based on its id in the database.
     * @param id The `id` in the database of the targeted user
     * @param userDto A json with the new version of the user.
     * @return An `User` object representing the updated entry in the DB
     * @throws BadRequestException if id's aren't the same
     * @throws NotFoundException if targeted user to be updated was not found
     */
    @PutMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<User> updateUser(@PathVariable("id") Long id, @RequestBody UserDTO userDto) throws BadRequestException, NotFoundException {
        User userDb = userService.getById(id);

        if (userDb == null) {
            throw new NotFoundException(String.format("User with id=%s was not found.", id));
        }

        modelMapper.map(userDto , userDb);

        return new ResponseEntity<>(userService.updateUser(userDb) , HttpStatus.ACCEPTED);
    }


    /**
     * Endpoint for deleting an user from database
     * @param id Id of targeted user
     * @return No content
     * @throws NotFoundException if the targeted user was not found
     */
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) throws NotFoundException {
        User userDb = userService.getById(id);
        if (userDb == null) {
            throw new NotFoundException(String.format("User with id=%s was not found.", id));
        }
        userService.delete(userDb.getId());

        return ResponseEntity.noContent().build();
    }

    /**
     * Endpoint for getting all users from database matching search bar string
     * @return A list of users
     */
    @GetMapping(value = "/filter/{search}")
    public @ResponseBody ResponseEntity<List<User>> getAllUsersStartingWith(@PathVariable("search") String search) {
        return new ResponseEntity<>(userService.getAlUsersMatchingSearchPattern(search.toLowerCase()), HttpStatus.OK);
    }

    @PostMapping(value = "/profilepic")
    @ResponseStatus(value = HttpStatus.CREATED)
    public @ResponseBody ResponseEntity<Void> setUserProfilePicture(@RequestParam("file") MultipartFile file ,
                                                      @RequestParam("userId") String userId ) throws URISyntaxException, NotFoundException {

        User user = userService.getById(Long.valueOf(userId));

        String fileSavedName = user.getEmail() + "_profile_picture_" + new Date().getTime()  + "." + FilenameUtils.getExtension(file.getOriginalFilename());

        user.setProfilePicturePath(fileSavedName);
        userService.updateUser(user);

        storageService.store(file , user.getEmail() , fileSavedName);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/pass/{id}")
    public @ResponseBody ResponseEntity<PasswordDTO> getPassword(@PathVariable("id") Long id) throws NotFoundException {
        User user = userService.getById(id);
        if (user == null) {
            throw new NotFoundException(String.format("User with id=%s was not found.", id));
        }

        PasswordDTO passDto = new PasswordDTO();
        passDto.setPassword(user.getPassword());

        return new ResponseEntity<>(passDto, HttpStatus.OK);
    }

    @PutMapping(value = "/follow")
    public @ResponseBody ResponseEntity<User> followUser(@RequestBody FollowDTO followDto) throws BadRequestException, NotFoundException {
        User currentUser = userService.getById(followDto.getUserId());
        User followedUser = userService.getById(followDto.getFollowedUserId());

        if (currentUser == null) {
            throw new NotFoundException(String.format("User with id=%s was not found.", followDto.getUserId()));
        }

        if (followedUser == null) {
            throw new NotFoundException(String.format("User with id=%s was not found.", followDto.getFollowedUserId()));
        }

        currentUser.getFollows().add(followedUser);
        followedUser.getIsFollowedBy().add(currentUser);

        userService.save(currentUser);
        userService.save(followedUser);

        return new ResponseEntity<>(currentUser , HttpStatus.ACCEPTED);
    }

    @PutMapping(value = "/unfollow")
    public @ResponseBody ResponseEntity<User> unfollowUser(@RequestBody FollowDTO followDto) throws BadRequestException, NotFoundException {
        User currentUser = userService.getById(followDto.getUserId());
        User followedUser = userService.getById(followDto.getFollowedUserId());

        if (currentUser == null) {
            throw new NotFoundException(String.format("User with id=%s was not found.", followDto.getUserId()));
        }

        if (followedUser == null) {
            throw new NotFoundException(String.format("User with id=%s was not found.", followDto.getFollowedUserId()));
        }

        currentUser.getFollows().remove(followedUser);
        followedUser.getIsFollowedBy().remove(currentUser);

        userService.save(currentUser);
        userService.save(followedUser);

        return new ResponseEntity<>(currentUser , HttpStatus.ACCEPTED);
    }

}
