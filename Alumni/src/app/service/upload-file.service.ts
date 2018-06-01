import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UploadDTO, Post } from '../userpage/components/timeline/data-model';
import 'rxjs/add/operator/map';

@Injectable()
export class UploadFileService {

  constructor(private httpClient: HttpClient) { }

  pushFileToStorage(uploadDto : UploadDTO , file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    let test = "hey boy";
    formdata.append('file', file);
    formdata.append('uploadDto' , JSON.stringify(uploadDto));
 
    const req = new HttpRequest('POST', 'http://localhost:8080/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    }) ;
 
    return this.httpClient.request(req);
  }

  addPost(postDto : Post , file : File): Observable<HttpEvent<{}>>{
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('userId', postDto.userId);
    formdata.append('content', postDto.content);

    const req = new HttpRequest('POST', 'http://localhost:8080/posts', formdata, {
      reportProgress: true,
      responseType: 'text'
    }) ;

    return this.httpClient.request(req);

  }

  getFiles(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getallfiles');
  }

  getFile(filename: string): any {
    return this.httpClient.get('http://localhost:8080/files/' + filename ,{
      responseType: 'blob',
      observe: 'response'
    })
// arata unde ai lista de postari
  }

}
