import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-sponsors-percentage',
  templateUrl: './sponsors-percentage.component.html',
  styleUrls: ['./sponsors-percentage.component.scss'],
  animations: [routerTransition()] 
})
export class SponsorsPercentageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
