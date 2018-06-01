package spring.framework.boundry.controllers;

import org.apache.http.auth.AUTH;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.framework.boundry.dto.LoginDTO;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.interfaces.UserService;
import spring.framework.entity.model.User;

@RestController
@RequestMapping(value = "auth")
public class AuthenticationController {

    private UserService userService;

    @Autowired
    public AuthenticationController(UserService userService){
        this.userService = userService;
    }

    @PostMapping(value = "/login")
    public @ResponseBody ResponseEntity<User> getUser(@RequestBody LoginDTO user) throws NotFoundException {
        User targetedUser = userService.getUserByEmailAndPassword(user.getEmail() , user.getPassword());
        if (user == null) {
            throw new NotFoundException("User was not found");
        }

        return new ResponseEntity<>(targetedUser, HttpStatus.OK);
    }

}
