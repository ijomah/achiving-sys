import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { req } from './req';
import { catchError, map, tap, last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UploaderService {

  constructor(private http: HttpClient) { }

  sendData() {
    return this.http.request(req)
      .pipe(
        map(event => this.getEventMessage(event, file)),
        tap(messsage => this.showProgress(message)),
        last(),
        catchError(this.handleError(file))
      )
  }

  private  getEventMessage(event: HttpEvent<any>, file: FileList) {
    switch(event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name} of file's size ${file.size}`
      case HttpEventType.UploadProgress:
          const percentDone = event.total ? 
          Math.round(100 * event.loaded / event.total) : 0;
        return `File "${file.name}" is ${percentDone}% uploaded`;
      case HttpEventType.Response:
        return `File "File ${file.name}" was completely uploadded`;
      default:
        return `File "${file.name}" surprising upload event: ${event.type}`
    }
  }

    handleError(error: any) {
      if (error) {
        console.log(error.message)
      }
    }
}
