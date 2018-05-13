import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-events-festive',
  templateUrl: './events-festive.component.html',
  styleUrls: ['./events-festive.component.scss'],
  animations: [routerTransition()] 
})
export class EventsFestiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
