import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../service/article.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-viewarticle',
  templateUrl: './viewarticle.component.html',
  styleUrls: ['./viewarticle.component.scss'],
  animations: [routerTransition()]
})
export class ViewarticleComponent implements OnInit {

  article_id : any;
  article : any;

  constructor(private route : ActivatedRoute,
              private articleService : ArticleService) { }

  async ngOnInit() {
    this.article_id = this.route.snapshot.params.id;
    this.articleService.getArticleById(this.article_id).subscribe((article : any[]) => {
      this.article = article;
    })
    await this.delay(700);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
 }

}
