package spring.framework.boundry.controllers;

import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.framework.boundry.dto.UserDTO;
import spring.framework.boundry.exceptions.BadRequestException;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.interfaces.FacultyService;
import spring.framework.entity.model.Faculty;
import spring.framework.entity.model.User;
import spring.framework.control.service.interfaces.UserService;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping(value = "users")
public class UserController {

    private UserService userService;
    private FacultyService facultyService;
    private ModelMapper modelMapper;

    @Autowired
    public UserController(UserService userService, FacultyService facultyService , ModelMapper modelMapper){
        this.userService = userService;
        this.facultyService = facultyService;
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
        User newUser = new User();
        modelMapper.map(userDto , newUser);
        newUser.setGraduatedFaculty(graduatedFaculty);

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
        if (!id.equals(userDto.getId())) {
            throw new BadRequestException("The id is not the same with id from object");
        }

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
}
