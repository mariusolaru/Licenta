package spring.framework.control.service.interfaces;

import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.entity.model.University;

import java.util.List;

public interface UniversityService {

    List<University> listAll();

    University getById(Long id);

    University save(University university);

    University updateUniversity(University university) throws NotFoundException;

    void delete(Long id);

}
