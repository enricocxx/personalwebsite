import { Component, OnInit } from '@angular/core';
import { Chris} from './Chris';

@Component({
  selector: 'app-chris',
  templateUrl: './chris.component.html',
  styleUrls: ['./chris.component.scss']
})
export class ChrisComponent implements OnInit {

  chris: Chris = {
    id: 1,
    summonerName: 'Black in Time'
  };

  constructor() { }

  ngOnInit() {
    console.log(this.chris);
  }

}
