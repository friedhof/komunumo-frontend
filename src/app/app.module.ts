import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from "@angular/http";

import { AppComponent } from './components/app.component';
import { EventService} from './services/event.service';

import { DatePipe } from './pipes/date.pipe';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  ],
  bootstrap: [AppComponent]
        DatePipe,
        TimePipe
        BrowserModule,
        HttpModule
    providers: [EventService],
})
export class AppModule { }
