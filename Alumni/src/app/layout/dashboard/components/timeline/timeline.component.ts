import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../../service/article.service';
import { DataService } from '../../../../service/data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public articles: Array<any> = [];

  constructor(private articleService : ArticleService , private data : DataService) { }

  ngOnInit() {
    this.data.currentArticles.subscribe(arts => this.articles = arts);
    this.articleService.getAllArticles().subscribe(res => {
      this.articles = res;
      this.articles.sort((a, b) => new Date(b.postingDate).getTime() - new Date(a.postingDate).getTime());
    });
  }

}
