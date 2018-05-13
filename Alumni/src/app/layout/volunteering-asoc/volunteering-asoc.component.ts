import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-volunteering-asoc',
  templateUrl: './volunteering-asoc.component.html',
  styleUrls: ['./volunteering-asoc.component.scss'],
  animations: [routerTransition()] 
})
export class VolunteeringAsocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
