package spring.framework.boundry.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.framework.boundry.dto.EventDTO;
import spring.framework.boundry.exceptions.BadRequestException;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.StorageService;
import spring.framework.control.service.interfaces.EventService;
import spring.framework.control.service.interfaces.UserService;
import spring.framework.entity.model.Event;
import spring.framework.entity.model.User;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "events")
public class EventController {

    private EventService eventService;
    private UserService userService;
    private ModelMapper modelMapper;

    @Autowired
    public EventController(EventService eventService ,
                             StorageService storageService , ModelMapper modelMapper , UserService userService){
        this.eventService = eventService;
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    /**
     * Endpoint for getting all Events from database
     * @return A list of Events
     */
    @GetMapping
    public @ResponseBody
    ResponseEntity<List<Event>> getAllEvents() {
        return new ResponseEntity<>(eventService.listAll(), HttpStatus.OK);
    }

    /**
     * Endpoint for getting a Event based on its id in the database.
     * @param id The `id` in the database of the targeted Event.
     * @return An 'Event` object representing the entry in the DB with id `id`
     * @throws NotFoundException if targeted Event doesn't exist
     */
    @GetMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Event> getEvent(@PathVariable("id") Long id) throws NotFoundException {
        Event event = eventService.getById(id);
        if (event == null) {
            throw new NotFoundException(String.format("Event with id=%s was not found.", id));
        }

        return new ResponseEntity<>(event, HttpStatus.OK);
    }

    /**
     * Endpoint for creating a Event
     * @return Created at route
     * @throws URISyntaxException
     */
    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public @ResponseBody ResponseEntity<Event> addEvent(@RequestBody EventDTO eventDto) throws URISyntaxException, NotFoundException {

        User user = userService.getById(Long.valueOf(eventDto.getUserId()));

        Event newEvent = new Event();
        //modelMapper.map(eventDto , newEvent);
        newEvent.setContent(eventDto.getContent());
        newEvent.setTitle(eventDto.getTitle());
        newEvent.setPostingDate(new Date());
        user.getEvents().add(newEvent);
        userService.updateUser(user);

        return ResponseEntity.created(new URI("/events/" + eventService.save(newEvent).getId())).body(newEvent);
    }

    /**
     * Endpoint for updating a Event based on its id in the database.
     * @param id The `id` in the database of the targeted Event
     * @param eventDto A json with the new version of the Event.
     * @return An `Event` object representing the updated entry in the DB
     * @throws BadRequestException if id's aren't the same
     * @throws NotFoundException if targeted Event to be updated was not found
     */
    @PutMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Event> updateEvent(@PathVariable("id") Long id, @RequestBody EventDTO eventDto) throws BadRequestException, NotFoundException {
        Event eventDb = eventService.getById(id);

        if (eventDb == null) {
            throw new NotFoundException(String.format("Event with id=%s was not found.", id));
        }

        modelMapper.map(eventDto , eventDb);

        return new ResponseEntity<>(eventService.updateEvent(eventDb) , HttpStatus.ACCEPTED);
    }


    /**
     * Endpoint for deleting an Event from database
     * @param id Id of targeted Event
     * @return No content
     * @throws NotFoundException if the targeted Event was not found
     */
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) throws NotFoundException {
        Event eventDb = eventService.getById(id);
        if (eventDb == null) {
            throw new NotFoundException(String.format("Event with id=%s was not found.", id));
        }
        eventService.delete(eventDb.getId());

        return ResponseEntity.noContent().build();
    }

}
