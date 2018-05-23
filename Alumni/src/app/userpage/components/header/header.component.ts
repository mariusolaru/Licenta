import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [routerTransition()] 
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
