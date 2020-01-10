import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: string[] = [];

  constructor(private _messageService: MessageService) { }

  deleteMessages(){
    this._messageService.deleteMessages();
    this._messageService.getMessages().subscribe(
      (list: string[]) => {
        this.messages = list;
      }
    );
  }

  ngOnInit() {
    this._messageService.getMessages().subscribe(
      (list: string[]) => {
        this.messages = list;
      }
    );
  }

}
