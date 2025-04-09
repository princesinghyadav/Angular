import { Component } from '@angular/core';
import { HeadersComponent } from "./headers/headers.component";
import { ServerComponent } from "./dashboard/server/server.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketComponent } from "./dashboard/ticket/ticket.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeadersComponent, ServerComponent, TrafficComponent, TicketComponent ],
})
export class AppComponent {


}
