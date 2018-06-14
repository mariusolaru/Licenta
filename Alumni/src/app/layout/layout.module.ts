import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import { ModalGalleryModule } from 'angular-modal-gallery';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ViewarticleComponent } from './viewarticle/viewarticle.component';
import { VieweventComponent } from './viewevent/viewevent.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbModule.forRoot(),
        NgbDropdownModule.forRoot(),
        NgbModule,
        ModalGalleryModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
            }
          })
    ],
    declarations: [LayoutComponent , SidebarComponent , HeaderComponent]
})
export class LayoutModule {}
