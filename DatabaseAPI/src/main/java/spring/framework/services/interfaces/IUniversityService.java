package spring.framework.services.interfaces;

import spring.framework.domains.University;

import java.util.List;

public interface IUniversityService {

    List<University> listAll();

    University getById(Long id);

    University save(University university);

    void delete(Long id);

}
