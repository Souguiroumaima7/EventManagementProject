import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  eventsService: any;
  ngOnInit() {
    this.eventsService.getEvents().subscribe(
       (data: any[]) => {
         this.events = data;
       },
       (error: any) => {
         console.log('Error fetching events:', error);
       }
    );
   }
  events: any[] = [];
 }
