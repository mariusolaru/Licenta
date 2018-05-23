package spring.framework.control.service.interfaces;

import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.entity.model.Faculty;
import java.util.List;

public interface FacultyService {

    List<Faculty> listAll();

    Faculty getById(Long id);

    Faculty save(Faculty faculty);

    Faculty updateFaculty(Faculty faculty) throws NotFoundException;

    void delete(Long id);

    Faculty getFacultyByName(String name);
}
