import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  isVisible :boolean=false

  
    isActive: boolean = false;
  
    toggleActive() {
      this.isActive = !this.isActive;
    }
  
}
