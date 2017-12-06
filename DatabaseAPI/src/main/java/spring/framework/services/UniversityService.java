package spring.framework.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.domains.University;
import spring.framework.repositories.IUniversityRepository;
import spring.framework.services.interfaces.IUniversityService;

import java.util.ArrayList;
import java.util.List;

@Service
public class UniversityService implements IUniversityService {

    private IUniversityRepository universityRepository;

    @Autowired
    public UniversityService(IUniversityRepository universityRepository){
        this.universityRepository = universityRepository;
    }

    @Override
    public List<University> listAll() {
        List<University> universities = new ArrayList<>();
        universityRepository.findAll().forEach(universities::add);
        return universities;
    }

    @Override
    public University getById(Long id) {
        return universityRepository.findOne(id);
    }

    @Override
    public University save(University university) {
        universityRepository.save(university);
        return university;
    }

    @Override
    public void delete(Long id) {
        universityRepository.delete(id);
    }
}
