import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataService } from '../../service/data.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Article } from './data-model';
import { ArticleService } from '../../service/article.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    public editor;
    public editorContent = `<h3>I am Example content</h3>`;
    public editorOptions = {
        placeholder: ""
    };

    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    
    newArticles : Array<any> = [];

    user : any; 
    articleTitle : string;
    articleContent : any;
    backMsg : string;
    succesMsg: string;

    beginning : boolean = true;

    constructor(private data : DataService , private modalService: NgbModal , private articleService: ArticleService) {
        this.sliders.push(
            {
                imagePath: 'assets/images/univ2.jpg',
                label: 'Bine ați revenit!',
                text: 'Stimați absolvenți, Bine ați venit pe pagina oficială a comunității de alumni a Universității "Alexandru Ioan Cuza" din Iași (UAIC).'
            },
             {
                imagePath: 'assets/images/univ3.jpg',
                label: 'Înscrie-te în comunitatea Alumni UAIC',
                text:
                    'Ești absolvent UAIC și vrei să te înscrii în comunitatea alumni a UAIC? Completează formularul de mai jos. Astfel, ne va fi mai ușor să păstrăm legătura cu tine.'
            }
        );
    }

    ngOnInit() {
        setTimeout(() => {
          this.editorContent = '<h1>content changed!</h1>';
          console.log('you can use the quill instance object to do something', this.editor);
          // this.editor.disable();
        }, 2800)

        this.data.currentBeginFlag.subscribe(flag => this.beginning = flag);
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
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

    async addNewArticle(){
        
        this.backMsg = null;
        if(this.articleTitle == null || this.articleTitle == undefined){
            this.backMsg = "Trebuie să adăugați un titlu";
            return;
        }
        if(this.articleContent == null || this.articleContent == undefined){
            this.backMsg = "Trebuie să adăugați un conținut";
            return;
        }

        const article : Article = {
            title : this.articleTitle,
            content : this.articleContent
        }

        this.articleService.insertArticle(article);

        this.articleTitle = null;
        this.articleContent = null;

        this.succesMsg = "Ați adaugat un nou articol cu succes";
        await this.delay(1500);

        this.articleService.getAllArticles().subscribe(res =>{
            this.newArticles = res;
            this.newArticles.sort((a, b) => new Date(b.postingDate).getTime() - new Date(a.postingDate).getTime());
        });
        this.succesMsg = null;
        await this.delay(600);
        this.data.changeArticles(this.newArticles);
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
