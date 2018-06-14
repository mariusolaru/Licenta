import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cronologypost',
  templateUrl: './cronologypost.component.html',
  styleUrls: ['./cronologypost.component.scss']
})
export class CronologypostComponent implements OnInit {

  @Input() post: any;
  @Input() shouldAppear: boolean;

  constructor() { }

  ngOnInit() {
  }

}
