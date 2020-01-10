import { Injectable } from '@angular/core';
import { HEROES } from './HEROES';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(private _messageService: MessageService) { }

  getHeroList(): Observable<Hero[]>{
    this._messageService.postMessage("Hai richiesto la lista degli eroi");
    return of(HEROES);
  }
}
