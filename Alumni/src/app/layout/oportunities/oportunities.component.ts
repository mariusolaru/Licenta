import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-oportunities',
  templateUrl: './oportunities.component.html',
  styleUrls: ['./oportunities.component.scss'],
  animations: [routerTransition()] 
})
export class OportunitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
