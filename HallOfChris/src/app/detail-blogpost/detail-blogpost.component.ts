import { Component, OnInit, Input } from '@angular/core';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-detail-blogpost',
  templateUrl: './detail-blogpost.component.html',
  styleUrls: ['./detail-blogpost.component.scss']
})
export class DetailBlogpostComponent implements OnInit {

  @Input() blogpost: Blogpost;

  constructor() { }

  ngOnInit() {
  }

}
