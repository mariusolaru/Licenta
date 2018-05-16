package spring.framework.control.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.entity.model.University;
import spring.framework.entity.repository.UniversityRepository;
import spring.framework.control.service.interfaces.UniversityService;

import java.util.ArrayList;
import java.util.List;

@Service
public class UniversityServiceImpl implements UniversityService {

    private UniversityRepository universityRepository;

    @Autowired
    public UniversityServiceImpl(UniversityRepository universityRepository){
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
