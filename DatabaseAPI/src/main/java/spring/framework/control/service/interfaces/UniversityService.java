package spring.framework.control.service.interfaces;

import spring.framework.entity.model.University;

import java.util.List;

public interface UniversityService {

    List<University> listAll();

    University getById(Long id);

    University save(University university);

    void delete(Long id);

}
