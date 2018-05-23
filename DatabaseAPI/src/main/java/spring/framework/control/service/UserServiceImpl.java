package spring.framework.control.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.entity.model.User;
import spring.framework.entity.repository.UserRepository;
import spring.framework.control.service.interfaces.UserService;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public List<User> listAll() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @Override
    public User getById(Long id) {
        return userRepository.findOne(id);
    }

    @Override
    public User save(User user) {
        userRepository.save(user);
        return user;
    }

    @Override
    public User updateUser(User user) throws NotFoundException {
        if (user.getId() != null) {
            return userRepository.save(user);
        }
        throw new NotFoundException("The user you tried to update doesn't exist");
    }

    @Override
    public void delete(Long id) {
        userRepository.delete(id);
    }

}
