package spring.framework.control.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.framework.boundry.exceptions.NotFoundException;
import spring.framework.control.service.interfaces.ArticleService;
import spring.framework.entity.model.Article;
import spring.framework.entity.repository.ArticleRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {

    private ArticleRepository articleRepository;

    @Autowired
    public ArticleServiceImpl(ArticleRepository articleRepository){
        this.articleRepository = articleRepository;
    }

    @Override
    public List<Article> listAll() {
        List<Article> Articles = new ArrayList<>();
        articleRepository.findAll().forEach(Articles::add);
        return Articles;
    }

    @Override
    public Article getById(Long id) {
        return articleRepository.findOne(id);
    }

    @Override
    public Article save(Article Article) {
        articleRepository.save(Article);
        return Article;
    }

    @Override
    public Article updateArticle(Article Article) throws NotFoundException {
        if (Article.getId() != null) {
            return articleRepository.save(Article);
        }
        throw new NotFoundException("The Article you tried to update doesn't exist");
    }

    @Override
    public void delete(Long id) {
        articleRepository.delete(id);
    }
}
