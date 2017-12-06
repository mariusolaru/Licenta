package spring.framework.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.domains.User;
import spring.framework.repositories.IUserRepository;
import spring.framework.services.interfaces.IUserService;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements IUserService{

    private IUserRepository userRepository;

    @Autowired
    public UserService(IUserRepository userRepository){
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
    public void delete(Long id) {
        userRepository.delete(id);
    }

}
