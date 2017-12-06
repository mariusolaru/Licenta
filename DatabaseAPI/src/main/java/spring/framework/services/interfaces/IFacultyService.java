package spring.framework.services.interfaces;

import spring.framework.domains.Faculty;
import java.util.List;

public interface IFacultyService {

    List<Faculty> listAll();

    Faculty getById(Long id);

    Faculty save(Faculty faculty);

    void delete(Long id);
}
