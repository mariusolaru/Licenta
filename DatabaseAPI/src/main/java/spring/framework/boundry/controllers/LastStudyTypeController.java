package spring.framework.boundry.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.framework.boundry.dto.ActivityDomainDTO;
import spring.framework.boundry.dto.LastStudyTypeDTO;
import spring.framework.control.service.interfaces.LastStudyTypeService;
import spring.framework.entity.model.ActivityDomain;
import spring.framework.entity.model.LastStudyType;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping(value = "study")
public class LastStudyTypeController {

    private LastStudyTypeService lastStudyTypeService;
    private ModelMapper modelMapper;

    @Autowired
    public LastStudyTypeController(LastStudyTypeService lastStudyTypeService, ModelMapper modelMapper){
        this.lastStudyTypeService = lastStudyTypeService;
        this.modelMapper = modelMapper;
    }

    /**
     * Endpoint for creating a study type
     * @param lastStudyTypeDTO A json with the new study type to be inserted
     * @return Created at route
     * @throws URISyntaxException
     */
    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public @ResponseBody
    ResponseEntity<LastStudyType> addLastStudyType(@RequestBody LastStudyTypeDTO lastStudyTypeDTO) throws URISyntaxException {
        LastStudyType lastStudyType = lastStudyTypeService.save(modelMapper.map(lastStudyTypeDTO, LastStudyType.class));

        return ResponseEntity.created(new URI("/study/" + lastStudyType.getId())).body(lastStudyType);
    }

}
