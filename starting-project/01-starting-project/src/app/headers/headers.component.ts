import { Component } from '@angular/core';
import { ButtonsComponent } from "../shared/buttons/buttons.component";

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {

}
