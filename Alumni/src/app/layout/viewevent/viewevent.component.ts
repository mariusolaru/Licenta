import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../service/article.service';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.scss']
})
export class VieweventComponent implements OnInit {

  event_id : any;
  event : any;

  constructor(private route : ActivatedRoute,
              private eventService : EventService) { }

  ngOnInit() {
    this.event_id = this.route.snapshot.params.id;
    this.eventService.getEventById(this.event_id).subscribe((event : any[]) => {
      this.event = event;
    })
  }

}
