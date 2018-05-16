package spring.framework.control.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
    public Faculty save(Faculty Faculty) {
        facultyRepository.save(Faculty);
        return Faculty;
    }

    @Override
    public void delete(Long id) { facultyRepository.delete(id);}
}
