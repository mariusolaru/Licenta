import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss'],
  animations: [routerTransition()] 
})
export class StudiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
