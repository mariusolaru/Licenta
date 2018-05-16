import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss'],
  animations: [routerTransition()] 
})
export class UserpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
