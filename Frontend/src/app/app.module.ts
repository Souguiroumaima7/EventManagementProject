import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EventComponent } from './Components/event/event.component';
import { EventListComponent } from './Components/event-list/event-list.component';
import { CreationEventComponent } from './Components/creation-event/creation-event.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { HomeComponent } from './Components/home/home.component' ;

@NgModule({
 declarations: [
   AppComponent,
   EventComponent,
   EventListComponent,
   CreationEventComponent,
   NavBarComponent,
   FooterComponent,
   SubscribeComponent,
   HomeComponent
 ],
 imports: [
   BrowserModule,
   FormsModule,
   ReactiveFormsModule,

 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }