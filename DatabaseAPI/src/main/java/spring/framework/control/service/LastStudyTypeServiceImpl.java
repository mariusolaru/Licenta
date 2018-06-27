package spring.framework.control.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.control.service.interfaces.LastStudyTypeService;
import spring.framework.entity.model.LastStudyType;
import spring.framework.entity.repository.LastStudyTypeRepository;

@Service
public class LastStudyTypeServiceImpl implements LastStudyTypeService {

    private LastStudyTypeRepository lastStudyTypeRepository;

    @Autowired
    public LastStudyTypeServiceImpl(LastStudyTypeRepository lastStudyTypeRepository){
        this.lastStudyTypeRepository = lastStudyTypeRepository;
    }

    @Override
    public LastStudyType save(LastStudyType lastStudyType) {
        return lastStudyTypeRepository.save(lastStudyType);
    }

    @Override
    public LastStudyType getLastStudyTypeByName(String name) {
        return lastStudyTypeRepository.getLastStudyTypeByName(name);
    }

}
