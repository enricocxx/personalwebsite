import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import { FirebaseService } from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) {} 
  
  //create local array of Articles
  articles: Article[] = []; 
  
  readCollection() :  void {
    this.firebaseService.readArticles().then((res) => {
      // return res; 
      res.foreach
      this.articles.concat(res);
      //console.log(this.articles);
    });
  }

  ngOnInit() {
    this.readCollection(); 
    console.log(this.articles);
    //this.articles.concat(this.readCollection());
  }
  
}
