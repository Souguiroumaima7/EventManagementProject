import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-creation-event',
  templateUrl: './creation-event.component.html',
  styleUrls: ['./creation-event.component.css']
})
export class CreationEventComponent {
  constructor(private eventService: EventService) {}
event: any;
createEvent(form: any) {
    if (!form.valid) {
      return;
    }

    this.eventService.createEvent(this.event).subscribe({
      next: () => {
        this.eventService.showMessage('Event created successfully');
        form.resetForm();
      },
      error: (error: any) => {
        this.eventService.showMessage('Error creating event');
        console.error(error);
      }
    });



}


}
