import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.scss'],
  animations: [routerTransition()] 
})
export class VolunteeringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
