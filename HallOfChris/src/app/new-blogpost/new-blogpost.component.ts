import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase/firebase.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-new-blogpost',
  templateUrl: './new-blogpost.component.html',
  styleUrls: ['./new-blogpost.component.scss']
})
export class NewBlogpostComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  public contentEditor = ClassicEditor;
  public content: any;

  blogPostForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    date: new FormControl(''),
    author: new FormControl(''),
  });

  onSubmit(value) {
    console.log(value);
    this.firebaseService.createBlogPost(value)
    .then(
      res => {
        console.log('uploaded');
      }
    );
  }

  ngOnInit() {
  }

}
