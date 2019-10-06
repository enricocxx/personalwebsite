import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.scss']
})
export class TimelineListComponent implements OnInit {

  constructor() { }

  events: any[] =["I want to make a website!", "Choosing Frameworks", "Moving Hosts", "Homepage Triumph!"];

  ngOnInit() {
  }

}
