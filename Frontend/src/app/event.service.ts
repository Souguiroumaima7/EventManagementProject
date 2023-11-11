import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class EventService {
 
 private eventsUrl = 'api/events';

 constructor(private http: HttpClient) { }

 getEvents(): Observable<any> {
    return this.http.get<any>(this.eventsUrl);
 }

 addEvent(event: any): Observable<any> {
    return this.http.post<any>(this.eventsUrl, event);
 }
}