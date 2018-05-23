package spring.framework.control.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.entity.model.Faculty;
import spring.framework.entity.repository.FacultyRepository;
import spring.framework.control.service.interfaces.FacultyService;

import java.util.ArrayList;
import java.util.List;

@Service
public class FacultyServiceImpl implements FacultyService {

    private FacultyRepository facultyRepository;

    @Autowired
    public FacultyServiceImpl(FacultyRepository facultyRepository){
        this.facultyRepository = facultyRepository;
    }

    @Override
    public List<Faculty> listAll() {
        List<Faculty> faculties = new ArrayList<>();
        facultyRepository.findAll().forEach(faculties::add);
        return faculties;
    }

    @Override
    public Faculty getById(Long id) {
        return facultyRepository.findOne(id);
    }

    @Override
    public Faculty save(Faculty faculty) {
        return facultyRepository.save(faculty);
    }

    @Override
    public Faculty updateFaculty(Faculty faculty) throws NotFoundException {
        if (faculty.getId() != null) {
            return facultyRepository.save(faculty);
        }
        throw new NotFoundException("The faculty you tried to update doesn't exist");
    }


    @Override
    public void delete(Long id) { facultyRepository.delete(id);}

    @Override
    public Faculty getFacultyByName(String name){
        return facultyRepository.getFacultyByName(name);
    }
}
