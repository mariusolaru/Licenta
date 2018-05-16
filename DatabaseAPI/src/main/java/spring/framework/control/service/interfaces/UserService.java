package spring.framework.control.service.interfaces;

import spring.framework.entity.model.User;
import java.util.List;

public interface UserService {

    List<User> listAll();

    User getById(Long id);

    User save(User user);

    void delete(Long id);
}
