import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsPartnershipRoutingModule } from './events-partnership-routing.module';
import { EventsPartnershipComponent} from './events-partnership.component';

@NgModule({
  imports: [
    CommonModule,
    EventsPartnershipRoutingModule
  ],
  declarations: [
    EventsPartnershipComponent
  ]
})
export class EventsPartnershipModule { }
