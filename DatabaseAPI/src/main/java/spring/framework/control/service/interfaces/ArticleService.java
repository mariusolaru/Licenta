package spring.framework.control.service.interfaces;

import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.entity.model.Article;

import java.util.List;

public interface ArticleService {

    List<Article> listAll();

    Article getById(Long id);

    Article save(Article post);

    Article updateArticle(Article post) throws NotFoundException;

    void delete(Long id);
}
