import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
 selector: 'app-event',
 templateUrl: './event.component.html',
 styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
 title = new FormControl('', Validators.required);
 date = new FormControl('', Validators.required);
 events: { title: string; date: string}[] = [];
   event!: { title: string; description: string; date: string; };


 ngOnInit(): void {
 }

 addEvent(): void {
    if (this.title.valid && this.date.valid) {
      this.title.setValue('');
      this.date.setValue('');
    }
 }

 removeEvent(index: number): void {
    this.events.splice(index, 1);
 }
}