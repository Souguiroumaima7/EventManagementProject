import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';


@Component({
 selector: 'app-event-list',
 templateUrl: './event-list.component.html',
 styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
addEvent() {
throw new Error('Method not implemented.');
}
 events !: any[];
name: any;
date: any;
description: any;

 constructor(private eventService: EventService) { }

 ngOnInit(): void {
    this.getEvents();
 }

 getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
 }
}