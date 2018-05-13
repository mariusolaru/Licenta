import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [routerTransition()] 
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
