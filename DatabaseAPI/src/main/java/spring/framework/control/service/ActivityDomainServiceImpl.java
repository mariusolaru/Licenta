package spring.framework.control.service;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.interfaces.ActivityDomainService;
import spring.framework.entity.model.ActivityDomain;
import spring.framework.entity.model.Faculty;
import spring.framework.entity.repository.ActivityDomainRepository;
import spring.framework.entity.repository.FacultyRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ActivityDomainServiceImpl implements ActivityDomainService {

    private ActivityDomainRepository activityDomainRepository;

    @Autowired
    public ActivityDomainServiceImpl(ActivityDomainRepository activityDomainRepository){
        this.activityDomainRepository = activityDomainRepository;
    }

    @Override
    public List<ActivityDomain> listAll() {
        List<ActivityDomain> activityDomains = new ArrayList<>();
        activityDomainRepository.findAll().forEach(activityDomains::add);
        return activityDomains;
    }

    @Override
    public ActivityDomain getById(Long id) {
        return activityDomainRepository.findOne(id);
    }

    @Override
    public ActivityDomain save(ActivityDomain activityDomain) {
        return activityDomainRepository.save(activityDomain);
    }

    @Override
    public ActivityDomain updateActivityDomain(ActivityDomain activityDomain) throws NotFoundException {
        if (activityDomain.getId() != null) {
            return activityDomainRepository.save(activityDomain);
        }
        throw new NotFoundException("The activity domain you tried to update doesn't exist");
    }


    @Override
    public void delete(Long id) { activityDomainRepository.delete(id);}

    @Override
    public ActivityDomain getActivityDomainByName(String name){
        return activityDomainRepository.getActivityDomainByName(name);
    }
}
