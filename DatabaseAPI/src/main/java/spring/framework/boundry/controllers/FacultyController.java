package spring.framework.boundry.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.framework.boundry.dto.FacultyDTO;
import spring.framework.boundry.exceptions.BadRequestException;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.interfaces.FacultyService;
import spring.framework.entity.model.Faculty;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping(value = "faculties")
public class FacultyController {

    private FacultyService facultyService;
    private ModelMapper modelMapper;

    @Autowired
    public FacultyController(FacultyService facultyService, ModelMapper modelMapper){
        this.facultyService = facultyService;
        this.modelMapper = modelMapper;
    }

    /**
     * Endpoint for getting all faculties from database
     * @return A list of faculties
     */
    @GetMapping
    public @ResponseBody ResponseEntity<List<Faculty>> getAllFaculties() {
        return new ResponseEntity<>(facultyService.listAll(), HttpStatus.OK);
    }

    /**
     * Endpoint for getting a faculty based on its id in the database.
     * @param id The `id` in the database of the targeted faculty.
     * @return An 'Faculty` object representing the entry in the DB with id `id`
     * @throws NotFoundException if targeted faculty doesn't exist
     */
    @GetMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Faculty> getFaculty(@PathVariable("id") Long id) throws NotFoundException {
        Faculty faculty = facultyService.getById(id);
        if (faculty == null) {
            throw new NotFoundException(String.format("Faculty with id=%s was not found.", id));
        }

        return new ResponseEntity<>(faculty, HttpStatus.OK);
    }

    /**
     * Endpoint for creating a faculty
     * @param facultyDto A json with the new faculty to be inserted
     * @return Created at route
     * @throws URISyntaxException
     */
    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public @ResponseBody ResponseEntity<Faculty> addFaculty(@RequestBody FacultyDTO facultyDto) throws URISyntaxException {
        Faculty faculty = facultyService.save(modelMapper.map(facultyDto, Faculty.class));

        return ResponseEntity.created(new URI("/faculties/" + faculty.getId())).body(faculty);
    }

    /**
     * Endpoint for updating a faculty based on its id in the database.
     * @param id The `id` in the database of the targeted faculty
     * @param facultyDto A json with the new version of the faculty.
     * @return A `Faculty` object representing the updated entry in the DB
     * @throws BadRequestException if id's aren't the same
     * @throws NotFoundException if targeted faculty to be updated was not found
     */
    @PutMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Faculty> updateFaculty(@PathVariable("id") Long id, @RequestBody FacultyDTO facultyDto) throws BadRequestException, NotFoundException {
        if (!id.equals(facultyDto.getId())) {
            throw new BadRequestException("The id is not the same with id from object");
        }

        Faculty facultyDb = facultyService.getById(id);

        if (facultyDb == null) {
            throw new NotFoundException(String.format("Faculty with id=%s was not found.", id));
        }

        modelMapper.map(facultyDto , facultyDb);

        return new ResponseEntity<>(facultyService.updateFaculty(facultyDb) , HttpStatus.ACCEPTED);
    }


    /**
     * Endpoint for deleting a faculty from database
     * @param id Id of targeted faculty
     * @return No content
     * @throws NotFoundException if the targeted faculty was not found
     */
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteFaculty(@PathVariable Long id) throws NotFoundException {
        Faculty facultyDb = facultyService.getById(id);
        if (facultyDb == null) {
            throw new NotFoundException(String.format("Faculty with id=%s was not found.", id));
        }
        facultyService.delete(facultyDb.getId());

        return ResponseEntity.noContent().build();
    }
}
