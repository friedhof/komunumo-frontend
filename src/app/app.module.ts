import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { EventService} from './services/event.service';

import { DatePipe } from './pipes/date.pipe';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
        DatePipe,
        TimePipe
    providers: [EventService],
})
export class AppModule { }
