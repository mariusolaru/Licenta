package spring.framework.services.interfaces;

import spring.framework.domains.User;
import java.util.List;

public interface IUserService {

    List<User> listAll();

    User getById(Long id);

    User save(User user);

    void delete(Long id);
}
