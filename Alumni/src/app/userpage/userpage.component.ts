import { Component, OnInit } from '@angular/core';
import { routerTransition , routerTransitionSidebar} from '../router.animations';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss'],
  animations: [routerTransition() , routerTransitionSidebar()] 
})
export class UserpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
