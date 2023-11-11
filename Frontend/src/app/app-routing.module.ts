import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { EventComponent } from './Components/event/event.component';
import { EventListComponent } from './Components/event-list/event-list.component';
import { CreationEventComponent } from './Components/creation-event/creation-event.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { FooterComponent } from './Components/footer/footer.component';

const routes: Routes = [
  {path:'NavBar',component:NavBarComponent},
  {path:'Events',component:EventComponent} ,
  {path:'Event-List',component:EventListComponent} ,
  {path:'Creation-Events',component:CreationEventComponent} ,
  {path:'Subscribe',component:SubscribeComponent} ,
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
