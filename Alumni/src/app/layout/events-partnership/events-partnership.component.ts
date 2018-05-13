import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-events-partnership',
  templateUrl: './events-partnership.component.html',
  styleUrls: ['./events-partnership.component.scss'],
  animations: [routerTransition()] 
})
export class EventsPartnershipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
