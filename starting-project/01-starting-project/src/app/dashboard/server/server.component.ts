import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard.component";

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  currentStatus = 'online';

  src="status.png"
  alt="A signal symbol"
  head="Server status"
}
