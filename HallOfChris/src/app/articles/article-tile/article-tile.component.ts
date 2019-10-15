import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-tile',
  templateUrl: './article-tile.component.html',
  styleUrls: ['./article-tile.component.scss']
})
export class ArticleTileComponent implements OnInit {

  constructor() { }

  @Input() article: Article
  
  dateString:String;
  
  ngOnInit() {
    this.dateString = this.article.date.toDateString(); 
  }

}
