import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './layout/dashboard/dashboard.component'
import { LayoutComponent } from './layout/layout.component'
// // AoT requires an exported function for factories
// export function createTranslateLoader(http: HttpClient) {
//     // for development
//     // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
//     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // <------ mandatory dependency for angular-modal-gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery
import { ModalGalleryModule } from 'angular-modal-gallery'; // 
import { ApploginNavbarComponent } from './applogin-navbar/applogin-navbar.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserpageModule } from './userpage/userpage.module';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        NgbModule.forRoot(),
        HttpClientModule,
        ReactiveFormsModule,
        UserpageModule,
        AppRoutingModule, FormsModule, NgbModule , DashboardModule,  BrowserAnimationsModule , ModalGalleryModule.forRoot()
    ],
    providers: [UserService],
    declarations: [AppComponent , ApploginNavbarComponent ],
    bootstrap: [AppComponent]
})
export class AppModule {}
