package spring.framework.boundry.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import spring.framework.entity.model.University;
import spring.framework.control.service.interfaces.UniversityService;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UniversityController {

    private UniversityService universityService;

    @Autowired
    public void setUniversityService(UniversityService universityService) {
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
