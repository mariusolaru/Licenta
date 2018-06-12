package spring.framework.control.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.interfaces.EventService;
import spring.framework.entity.model.Event;
import spring.framework.entity.repository.EventRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    private EventRepository eventRepository;

    @Autowired
    public EventServiceImpl(EventRepository eventRepository){
        this.eventRepository = eventRepository;
    }

    @Override
    public List<Event> listAll() {
        List<Event> events = new ArrayList<>();
        eventRepository.findAll().forEach(events::add);
        return events;
    }

    @Override
    public Event getById(Long id) {
        return eventRepository.findOne(id);
    }

    @Override
    public Event save(Event event) {
        eventRepository.save(event);
        return event;
    }

    @Override
    public Event updateEvent(Event event) throws NotFoundException {
        if (event.getId() != null) {
            return eventRepository.save(event);
        }
        throw new NotFoundException("The Event you tried to update doesn't exist");
    }

    @Override
    public void delete(Long id) {
        eventRepository.delete(id);
    }
}
