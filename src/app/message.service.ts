import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
    
  constructor() { }

  getMessages(): Observable<string[]>{
    return of(this.messages);
  }

  postMessage(newMessage: string): void{
    this.messages.push(newMessage);
  }

  deleteMessages(): void{
    this.messages = [];
  }
}
