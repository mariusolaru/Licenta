import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-aboutus-mission',
  templateUrl: './aboutus-mission.component.html',
  styleUrls: ['./aboutus-mission.component.scss'],
  animations: [routerTransition()] 
})
export class AboutusMissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
