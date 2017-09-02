import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

    constructor(private http: Http) { }

    readAllEvents() {
        return this.http.get('http://dev.komunumo.org/api/events')
            .map(res => res.json());
    }

}
