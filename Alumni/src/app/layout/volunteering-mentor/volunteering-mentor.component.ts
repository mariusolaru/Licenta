import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-volunteering-mentor',
  templateUrl: './volunteering-mentor.component.html',
  styleUrls: ['./volunteering-mentor.component.scss'],
  animations: [routerTransition()] 
})
export class VolunteeringMentorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
