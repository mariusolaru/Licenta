import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  animations: [routerTransition()] 
  
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
