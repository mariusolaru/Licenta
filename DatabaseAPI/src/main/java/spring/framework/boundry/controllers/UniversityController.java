package spring.framework.boundry.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.framework.boundry.dto.UniversityDTO;
import spring.framework.boundry.exceptions.BadRequestException;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.interfaces.UniversityService;
import spring.framework.entity.model.University;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping(value = "university")
public class UniversityController {

    private UniversityService universityService;
    private ModelMapper modelMapper;

    @Autowired
    public UniversityController(UniversityService universityService , ModelMapper modelMapper){
        this.universityService = universityService;
        this.modelMapper = modelMapper;
    }

    /**
     * Endpoint for getting all universities from database
     * @return A list of universities
     */
    @GetMapping
    public @ResponseBody ResponseEntity<List<University>> getAllUniversities() {
        return new ResponseEntity<>(universityService.listAll(), HttpStatus.OK);
    }

    /**
     * Endpoint for getting an university based on its id in the database.
     * @param id The `id` in the database of the targeted university.
     * @return An `University` object representing the entry in the DB with id `id`
     * @throws NotFoundException if targeted university doesn't exist
     */
    @GetMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<University> getUniversity(@PathVariable("id") Long id) throws NotFoundException {
        University university = universityService.getById(id);
        if (university == null) {
            throw new NotFoundException(String.format("University with id=%s was not found.", id));
        }

        return new ResponseEntity<>(university, HttpStatus.OK);
    }

    /**
     * Endpoint for creating an university
     * @param universityDto A json with the new university to be inserted
     * @return Created at route
     * @throws URISyntaxException
     */
    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public @ResponseBody ResponseEntity<University> addUniversity(@RequestBody UniversityDTO universityDto) throws URISyntaxException {
        University university = universityService.save(modelMapper.map(universityDto , University.class));

        return ResponseEntity.created(new URI("/university/" + university.getId())).body(university);
    }

    /**
     * Endpoint for updating an university based on its id in the database.
     * @param id The `id` in the database of the targeted university
     * @param universityDto A json with the new version of the university.
     * @return An `University` object representing the updated entry in the DB
     * @throws BadRequestException if id's aren't the same
     * @throws NotFoundException if targeted university to be updated was not found
     */
    @PutMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<University> updateUniversity(@PathVariable("id") Long id, @RequestBody UniversityDTO universityDto) throws BadRequestException, NotFoundException {

        University universityDb = universityService.getById(id);

        if (universityDb == null) {
            throw new NotFoundException(String.format("University with id=%s was not found.", id));
        }

        modelMapper.map(universityDto , universityDb);

        return new ResponseEntity<>(universityService.updateUniversity(universityDb) , HttpStatus.ACCEPTED);
    }


    /**
     * Endpoint for deleting an university from database
     * @param id Id of targeted university
     * @return No content
     * @throws NotFoundException if the targeted university was not found
     */
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteUniversity(@PathVariable Long id) throws NotFoundException {
        University universityDb = universityService.getById(id);
        if (universityDb == null) {
            throw new NotFoundException(String.format("University with id=%s was not found.", id));
        }
        universityService.delete(universityDb.getId());

        return ResponseEntity.noContent().build();
    }
}
