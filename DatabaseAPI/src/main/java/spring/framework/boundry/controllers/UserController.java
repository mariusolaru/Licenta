package spring.framework.boundry.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.framework.entity.model.User;
import spring.framework.control.service.interfaces.UserService;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    /**
     * Endpoint for getting all users.
     * @return OK so far.
     */
    @RequestMapping(
            value = "/user/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<User>> getAllUsers() {

        ArrayList<User> users = (ArrayList<User>) userService.listAll();

        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @RequestMapping(
            value = "/user/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.getById(id);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    /**
     * Endpoint for creating a new user.
     * @param user A JSON representing the new user to be inserted.
     * @return BAD_REQUEST if the user is invalid, OK otherwise.
     */
    @RequestMapping(
            value = "/add/user",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<User> addUser(@RequestBody User user) {

        User newUser = new User();

        newUser.setId(user.getId());
        newUser.setEmail(user.getEmail());
        newUser.setPassword(user.getPassword());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setType(user.getType());
        newUser.setBirthday(user.getBirthday());
        newUser.setSex(user.getSex());

        userService.save(newUser);

        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @RequestMapping(
            value = "/delete/user/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Void> deleteUser(@PathVariable String id){

        userService.delete(Long.valueOf(id));

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
