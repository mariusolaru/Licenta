package spring.framework.control.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.entity.model.ActivityDomain;
import spring.framework.entity.model.Faculty;
import spring.framework.entity.model.User;
import spring.framework.entity.repository.UserRepository;
import spring.framework.control.service.interfaces.UserService;

import java.util.ArrayList;
import java.util.HashSet;
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

    @Override
    public Long getUserIdByEmail(String email) {
        return userRepository.getUserByEmail(email).getId();
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.getUserByEmail(email);
    }

    @Override
    public User getUserByEmailAndPassword(String email, String password) {
        return userRepository.getUserByEmailAndPassword(email , password);
    }

    @Override
    public List<User> getAlUsersMatchingSearchPattern(String searchPattern) {
        List<User> temp = listAll();
        List<User> ret = new ArrayList<>();

        for(User user : temp){
            String firstNameLastName = user.getFirstname() + " " + user.getLastname();
            String lastNameFirstName = user.getLastname() + " " + user.getFirstname();

            if(firstNameLastName.toLowerCase().contains(searchPattern) || lastNameFirstName.toLowerCase().contains(searchPattern)){
                ret.add(user);
            }
        }

        return ret;
    }

    @Override
    public String getPasswordById(Long id) {
        return userRepository.getPasswordById(id);
    }

    @Override
    public ActivityDomain getActivityDomainById(Long id) {
        return userRepository.getActivityDomainById(id);
    }

    @Override
    public Faculty getGraduatedFacultyById(Long id) {
        return userRepository.getGraduatedFacultyById(id);
    }

    @Override
    public List<String> getColleaguesFromSameYear(int year) {
        List<String> colleagues = new ArrayList<>();

        return colleagues;

    }

    @Override
    public List<User> getFollowingsFollowings(Long userId) {

        User currentUser = getById(userId);

        List<User> users =  userRepository.getFollowingsFollowings(userId);
        List<User> usersFacultyColleagues = userRepository.getUsersFacultyColleagues(currentUser.getGraduatedFaculty().getName());
        List<User> usersGenerationColleagues = userRepository.getUsersGenerationColleagues(currentUser.getGraduationYear());

        users.addAll(usersFacultyColleagues);
        users.addAll(usersGenerationColleagues);

        List<User> uniqueUsers = new ArrayList<>(new HashSet<>(users));

        List<User> ret = new ArrayList<User>();

        for(User user : uniqueUsers){
            if(!user.getId().equals(userId)) {
                User temp = getById(user.getId());
                ret.add(temp);
            }
        }

        return ret;
    }

}
