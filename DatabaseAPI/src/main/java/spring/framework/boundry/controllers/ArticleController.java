package spring.framework.boundry.controllers;

import org.apache.commons.io.FilenameUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import spring.framework.boundry.dto.ArticleDTO;
import spring.framework.boundry.exceptions.BadRequestException;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.StorageService;
import spring.framework.control.service.interfaces.ArticleService;
import spring.framework.control.service.interfaces.UserService;
import spring.framework.entity.model.Article;
import spring.framework.entity.model.User;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value="articles")
public class ArticleController {

    private ArticleService articleService;
    private UserService userService;
    private StorageService storageService;
    private ModelMapper modelMapper;

    @Autowired
    public ArticleController(ArticleService articleService, UserService userService ,
                          StorageService storageService , ModelMapper modelMapper){
        this.articleService = articleService;
        this.userService = userService;
        this.storageService = storageService;
        this.modelMapper = modelMapper;
    }

    /**
     * Endpoint for getting all Articles from database
     * @return A list of Articles
     */
    @GetMapping
    public @ResponseBody ResponseEntity<List<Article>> getAllArticles() {
        return new ResponseEntity<>(articleService.listAll(), HttpStatus.OK);
    }

    /**
     * Endpoint for getting a Article based on its id in the database.
     * @param id The `id` in the database of the targeted Article.
     * @return An 'Article` object representing the entry in the DB with id `id`
     * @throws NotFoundException if targeted Article doesn't exist
     */
    @GetMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Article> getArticle(@PathVariable("id") Long id) throws NotFoundException {
        Article article = articleService.getById(id);
        if (article == null) {
            throw new NotFoundException(String.format("Article with id=%s was not found.", id));
        }

        return new ResponseEntity<>(article, HttpStatus.OK);
    }

    /**
     * Endpoint for creating a Article
     * @return Created at route
     * @throws URISyntaxException
     */
    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public @ResponseBody ResponseEntity<Article> addArticle(@RequestBody ArticleDTO articleDto) throws URISyntaxException, NotFoundException {

        Article newArticle = new Article();
        modelMapper.map(articleDto , newArticle);
        newArticle.setPostingDate(new Date());

        return ResponseEntity.created(new URI("/articles/" + articleService.save(newArticle).getId())).body(newArticle);
    }

    /**
     * Endpoint for updating a Article based on its id in the database.
     * @param id The `id` in the database of the targeted Article
     * @param articleDto A json with the new version of the Article.
     * @return An `Article` object representing the updated entry in the DB
     * @throws BadRequestException if id's aren't the same
     * @throws NotFoundException if targeted Article to be updated was not found
     */
    @PutMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Article> updateArticle(@PathVariable("id") Long id, @RequestBody ArticleDTO articleDto) throws BadRequestException, NotFoundException {
        Article articleDb = articleService.getById(id);

        if (articleDb == null) {
            throw new NotFoundException(String.format("Article with id=%s was not found.", id));
        }

        modelMapper.map(articleDto , articleDb);

        return new ResponseEntity<>(articleService.updateArticle(articleDb) , HttpStatus.ACCEPTED);
    }


    /**
     * Endpoint for deleting an Article from database
     * @param id Id of targeted Article
     * @return No content
     * @throws NotFoundException if the targeted Article was not found
     */
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteArticle(@PathVariable Long id) throws NotFoundException {
        Article ArticleDb = articleService.getById(id);
        if (ArticleDb == null) {
            throw new NotFoundException(String.format("Article with id=%s was not found.", id));
        }
        articleService.delete(ArticleDb.getId());

        return ResponseEntity.noContent().build();
    }
    
}
