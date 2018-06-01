package spring.framework.boundry.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.framework.boundry.dto.ActivityDomainDTO;
import spring.framework.boundry.dto.FacultyDTO;
import spring.framework.control.service.interfaces.ActivityDomainService;
import spring.framework.control.service.interfaces.FacultyService;
import spring.framework.entity.model.ActivityDomain;
import spring.framework.entity.model.Faculty;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping(value = "domains")
public class ActivityDomainController {

    private ActivityDomainService activityDomainService;
    private ModelMapper modelMapper;

    @Autowired
    public ActivityDomainController(ActivityDomainService activityDomainService, ModelMapper modelMapper){
        this.activityDomainService = activityDomainService;
        this.modelMapper = modelMapper;
    }

    /**
     * Endpoint for getting all domains from database
     * @return A list of domains
     */
    @GetMapping
    public @ResponseBody
    ResponseEntity<List<ActivityDomain>> getAllActivityDomains() {
        return new ResponseEntity<>(activityDomainService.listAll(), HttpStatus.OK);
    }

    /**
     * Endpoint for creating a domain
     * @param activityDomainDTO A json with the new domain to be inserted
     * @return Created at route
     * @throws URISyntaxException
     */
    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public @ResponseBody ResponseEntity<ActivityDomain> addActivityDomain(@RequestBody ActivityDomainDTO activityDomainDTO) throws URISyntaxException {
        ActivityDomain activityDomain = activityDomainService.save(modelMapper.map(activityDomainDTO, ActivityDomain.class));

        return ResponseEntity.created(new URI("/domains/" + activityDomain.getId())).body(activityDomain);
    }

}
