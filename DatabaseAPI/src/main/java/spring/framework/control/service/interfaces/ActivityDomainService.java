package spring.framework.control.service.interfaces;

import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.entity.model.ActivityDomain;

import java.util.List;

public interface ActivityDomainService {

    List<ActivityDomain> listAll();

    ActivityDomain getById(Long id);

    ActivityDomain save(ActivityDomain activityDomain);

    ActivityDomain updateActivityDomain(ActivityDomain activityDomain) throws NotFoundException;

    void delete(Long id);

    ActivityDomain getActivityDomainByName(String name);

}
