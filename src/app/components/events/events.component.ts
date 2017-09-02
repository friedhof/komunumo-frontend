import { Component, OnInit } from '@angular/core';

import { EventService } from '../../services/event.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    private events: Event[] = [];

    constructor(private eventService: EventService) { }

    ngOnInit() {
        this.eventService.readAllEvents().subscribe(events => this.events = events);
    }

}

interface Event {
    id: string;
    version: number;
    title: string;
    subtitle: string;
    speaker: string;
    dateTime: DateTime;
    location: string;
    description: string;
    tags: string[];
    status: string;
}

interface DateTime {
    date: Date;
    time: Time;
}

interface Date {
    year: number;
    month: number;
    day: number;
}

interface Time {
    hour: number;
    minute: number;
}
