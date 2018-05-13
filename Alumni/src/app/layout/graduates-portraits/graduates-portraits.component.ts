import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-graduates-portraits',
  templateUrl: './graduates-portraits.component.html',
  styleUrls: ['./graduates-portraits.component.scss'],
  animations: [routerTransition()] 
})
export class GraduatesPortraitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
