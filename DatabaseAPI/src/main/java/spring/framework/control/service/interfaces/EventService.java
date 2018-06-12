package spring.framework.control.service.interfaces;

import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.entity.model.Event;

import java.util.List;

public interface EventService {

    List<Event> listAll();

    Event getById(Long id);

    Event save(Event event);

    Event updateEvent(Event event) throws NotFoundException;

    void delete(Long id);

}
