import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { ApploginNavbarComponent } from './applogin-navbar/applogin-navbar.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CollapseModule.forRoot(), BsDropdownModule.forRoot(),
    NgbModule.forRoot() ],
  declarations: [ AppComponent, ApploginNavbarComponent, HeaderComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
