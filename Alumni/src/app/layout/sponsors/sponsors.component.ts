import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
  animations: [routerTransition()] 
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
