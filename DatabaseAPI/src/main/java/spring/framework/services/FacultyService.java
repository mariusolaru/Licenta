package spring.framework.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.domains.Faculty;
import spring.framework.repositories.IFacultyRepository;
import spring.framework.services.interfaces.IFacultyService;

import java.util.ArrayList;
import java.util.List;

@Service
public class FacultyService implements IFacultyService {

    private IFacultyRepository facultyRepository;

    @Autowired
    public FacultyService(IFacultyRepository facultyRepository){
        this.facultyRepository = facultyRepository;
    }

    @Override
    public List<Faculty> listAll() {
        List<Faculty> universities = new ArrayList<>();
        facultyRepository.findAll().forEach(universities::add);
        return universities;
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
