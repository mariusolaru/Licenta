package spring.framework.control.service.interfaces;

import spring.framework.entity.model.LastStudyType;

public interface LastStudyTypeService {

    LastStudyType save(LastStudyType lastStudyType);

    LastStudyType getLastStudyTypeByName(String name);
}
