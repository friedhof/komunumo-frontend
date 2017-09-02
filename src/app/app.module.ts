import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from "@angular/http";

import { AppComponent } from './components/app.component';
import { EventsComponent } from './components/events/events.component';

import { EventService} from './services/event.service';

import { DatePipe } from './pipes/date.pipe';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
    declarations: [
        AppComponent,
        EventsComponent,
        DatePipe,
        TimePipe
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [EventService],
    bootstrap: [AppComponent]
})
export class AppModule { }
