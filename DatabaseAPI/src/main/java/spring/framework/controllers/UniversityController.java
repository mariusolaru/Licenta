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
import spring.framework.domains.University;
import spring.framework.services.interfaces.IUniversityService;

import java.util.ArrayList;
import java.util.List;

@Controller
public class UniversityController {

    private IUniversityService universityService;

    @Autowired
    public void setUniversityService(IUniversityService universityService) {
        this.universityService = universityService;
    }

    /**
     * Endpoint for getting all universities.
     * @return OK so far.
     */
    @RequestMapping(
            value = "/university/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<University>> getAllUniversities() {

        ArrayList<University> universities = (ArrayList<University>) universityService.listAll();

        return new ResponseEntity<>(universities, HttpStatus.OK);
    }

    @RequestMapping(
            value = "/university/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<University> getUniversity(@PathVariable Long id) {
        University university = universityService.getById(id);

        if (university == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(university, HttpStatus.OK);
    }

    /**
     * Endpoint for creating a new university.
     * @param university A JSON representing the new university to be inserted.
     * @return BAD_REQUEST if the faculty is invalid, OK otherwise.
     */
    @RequestMapping(
            value = "/add/university",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<University> addUniversity(@RequestBody University university) {

        University newUniversity = new University();

        newUniversity.setId(university.getId());
        newUniversity.setName(university.getName());

        universityService.save(newUniversity);

        return new ResponseEntity<>(university, HttpStatus.CREATED);
    }

    @RequestMapping(
            value = "/delete/university/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Void> deleteUniversity(@PathVariable String id){

        universityService.delete(Long.valueOf(id));

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
