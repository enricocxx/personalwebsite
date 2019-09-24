import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';
import { Blogpost } from '../blogpost';


@Component({
  selector: 'app-home-blogpost',
  templateUrl: './home-blogpost.component.html',
  styleUrls: ['./home-blogpost.component.scss']
})
export class HomeBlogpostComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }
  // {
  //   this.firebaseService.readBlogPosts().then( dbBlogpost => {
  //      return new Blogpost(dbBlogpost)
  //   });
  // }
  blogposts: Blogpost[];

  ngOnInit() {
      console.log(this.firebaseService.readBlogPosts());
  }

}
