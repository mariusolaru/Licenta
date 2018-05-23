import { Component, OnInit } from '@angular/core';
import { routerTransition , routerTransitionSidebar} from './router.animations';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routerTransition() , routerTransitionSidebar()] 
})
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
