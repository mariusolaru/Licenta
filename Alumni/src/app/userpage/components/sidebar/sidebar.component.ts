import { Component, OnInit } from '@angular/core';
import { routerTransition, routerTransitionSidebar } from '../../../router.animations';
import { AuthenticationService } from '../../../service/authentication.service';
import { Router } from '@angular/router';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [routerTransitionSidebar()] 
})
export class SidebarComponent implements OnInit {

  showMenu: string = '';

  constructor(private authService : AuthenticationService , private router : Router , private data : DataService) { }

  ngOnInit() {
  }

  addExpandClassEvents(element: any) {
    if (element === this.showMenu) {
        this.showMenu = '0';
    } else {
        this.showMenu = element;
    }
}   

   addExpandClassAboutus(element: any) {
    if (element === this.showMenu) {
        this.showMenu = '0';
    } else {
        this.showMenu = element;
    }
}
    addExpandClassGraduates(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    addExpandClassVolunteering(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    addExpandClassSponsors(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    logout(){
        console.log("Delogare...");
        this.data.changeBeginFlag(true);
        this.authService.logout();
      }

}
