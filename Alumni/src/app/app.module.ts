import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ApploginNavbarComponent } from './applogin-navbar/applogin-navbar.component'
// // AoT requires an exported function for factories
// export function createTranslateLoader(http: HttpClient) {
//     // for development
//     // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
//     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,BrowserModule, FormsModule, NgbModule
    ],
    declarations: [AppComponent , ApploginNavbarComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
