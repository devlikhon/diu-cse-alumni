import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  events$: Observable<any[]> = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
