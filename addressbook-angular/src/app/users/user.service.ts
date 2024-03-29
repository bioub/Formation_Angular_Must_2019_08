import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  events$ = new EventEmitter<string>();

  constructor(protected httpClient: HttpClient) { }

  getAll$(): Observable<User[]> {
    return this.httpClient.get<User[]>('/users');
  }

  getById$(id): Observable<User> {
    const request$ = this.httpClient.get<User>('/users/' + id);

    if (id === '1') {
      return request$.pipe(delay(4000));
    }

    return request$;
  }

  create$(user: User): Observable<User>  {
    return this.httpClient.post<User>('/users', user);
  }
}
