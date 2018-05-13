import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-volunteering-action',
  templateUrl: './volunteering-action.component.html',
  styleUrls: ['./volunteering-action.component.scss'],
  animations: [routerTransition()] 
})
export class VolunteeringActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
