import { Injectable } from '@angular/core';
import { Tea } from '../tea';
import { TEAS } from '../mock-teas';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class TeaService {

  constructor(private messageService: MessageService) { }

  getTeas(): Observable<Tea[]> 
  {
    // TODO: send the message _after_ fetching the teas
    this.messageService.add('TeaService: fetched teas');
    return of(TEAS);
  }
}