package spring.framework.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import spring.framework.domains.Faculty;
import spring.framework.services.interfaces.IFacultyService;

import java.util.ArrayList;
import java.util.List;

@Controller
public class FacultyController {

    private IFacultyService facultyService;

    @Autowired
    public void setFacultyService(IFacultyService facultyService) {
        this.facultyService = facultyService;
    }

    /**
     * Endpoint for getting all faculties.
     * @return OK so far.
     */
    @RequestMapping(
            value = "/faculty/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Faculty>> getAllFaculties() {

        ArrayList<Faculty> faculties = (ArrayList<Faculty>) facultyService.listAll();

        return new ResponseEntity<>(faculties, HttpStatus.OK);
    }

    @RequestMapping(
            value = "/faculty/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Faculty> getFaculty(@PathVariable Long id) {
        Faculty faculty = facultyService.getById(id);

        if (faculty == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(faculty, HttpStatus.OK);
    }

    /**
     * Endpoint for creating a new faculty.
     * @param faculty A JSON representing the new faculty to be inserted.
     * @return BAD_REQUEST if the faculty is invalid, OK otherwise.
     */
    @RequestMapping(
            value = "/add/faculty",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Faculty> addFaculty(@RequestBody Faculty faculty) {

        Faculty newFaculty = new Faculty();

        newFaculty.setId(faculty.getId());
        newFaculty.setName(faculty.getName());

        facultyService.save(newFaculty);

        return new ResponseEntity<>(faculty, HttpStatus.CREATED);
    }

    @RequestMapping(
            value = "/delete/faculty/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Void> deleteFaculty(@PathVariable String id){

        facultyService.delete(Long.valueOf(id));

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
