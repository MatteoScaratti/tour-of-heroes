import { Injectable } from '@angular/core';
import { HEROES } from './HEROES';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url: string = "api/heroes"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private _http : HttpClient,
              private _messageService: MessageService) { }

  getHeroList(): Observable<Hero[]>{
    return this._http.get<Hero[]>(this.url).pipe(
      tap( _=> this.log("Lista richiesta")),
      catchError(this.handleError<Hero[]>('Stavo richiedendo gli eroi', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.url}/${id}`;
    return this._http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

  private log(message: string) {
    this._messageService.postMessage(`HeroService: ${message}`);
  }
}
