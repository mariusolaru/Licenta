import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ArticleService } from '../../service/article.service';
import { DataService } from '../../service/data.service';
import { EventService } from '../../service/event.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Eventy } from '../dashboard/data-model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  animations: [routerTransition()] 
})
export class EventsComponent implements OnInit {

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
      placeholder: ""
  };

  beginning : boolean = true;
  backMsg : string;
  succesMsg: string;
  eventTitle : string;
  eventContent : any;

  public events: Array<any> = [];
  newEvents : Array<any> = [];

  constructor(private eventService : EventService , private data : DataService , private modalService: NgbModal) { }

  ngOnInit() {

    setTimeout(() => {
      this.editorContent = '<h1>content changed!</h1>';
      //console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)

    this.data.currentBeginFlag.subscribe(flag => this.beginning = flag);

    this.data.currentEvents.subscribe(events => this.events = events);
    this.eventService.getAllEvents().subscribe(res => {
      this.events = res;
      this.events.sort((a, b) => new Date(b.postingDate).getTime() - new Date(a.postingDate).getTime());
    });
  }

  closeResult: string;

  open(content) {
      this.modalService.open(content, { size: 'lg', backdrop: 'static' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}

    delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async addNewEvent(){
        
    this.backMsg = null;
    if(this.eventTitle == null || this.eventTitle == undefined){
        this.backMsg = "Trebuie să adăugați un titlu";
        return;
    }
    if(this.eventContent == null || this.eventContent == undefined){
        this.backMsg = "Trebuie să adăugați un conținut";
        return;
    }

    const eventy : Eventy = {
        title : this.eventTitle,
        content : this.eventContent
    }

    this.eventService.insertEvent(eventy);

    this.eventTitle = null;
    this.eventContent = null;

    this.succesMsg = "Ați adaugat un nou eveniment cu succes";
    await this.delay(1500);

    this.eventService.getAllEvents().subscribe(res =>{
        this.newEvents = res;
        this.newEvents.sort((a, b) => new Date(b.postingDate).getTime() - new Date(a.postingDate).getTime());
    });
    this.succesMsg = null;
    await this.delay(600);
    this.data.changeEvents(this.newEvents);
  }

  onEditorBlured(quill) {
    // console.log('editor blur!', quill);
  }
 
  onEditorFocused(quill) {
      // console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
      this.editor = quill;
      // console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
      // console.log('quill content is changed!', quill, html, text);
  }

}
