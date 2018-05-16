package spring.framework.control.service.interfaces;

import spring.framework.entity.model.Faculty;
import java.util.List;

public interface FacultyService {

    List<Faculty> listAll();

    Faculty getById(Long id);

    Faculty save(Faculty faculty);

    void delete(Long id);
}
