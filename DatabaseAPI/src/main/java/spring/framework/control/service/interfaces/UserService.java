package spring.framework.control.service.interfaces;

import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.entity.model.User;
import java.util.List;

public interface UserService {

    List<User> listAll();

    User getById(Long id);

    User save(User user);

    User updateUser(User user) throws NotFoundException;

    void delete(Long id);
}
