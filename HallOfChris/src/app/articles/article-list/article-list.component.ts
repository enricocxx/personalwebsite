import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor() { }
  
  articles: any[] = ['1','2','3','4','5','6'];

  ngOnInit() {
    console.log(this.articles);
  }

}
