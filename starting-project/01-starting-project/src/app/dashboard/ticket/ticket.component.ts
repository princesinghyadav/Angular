import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';
import { TicketsComponent } from "./tickets/tickets.component";
import { NewticketsComponent } from "./newtickets/newtickets.component";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [DashboardComponent, NewticketsComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {


  src="list.png"
  alt="A list of items "
  head="Support Tickets"
}
