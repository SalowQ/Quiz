import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  opened = false;
  title = 'quiz';

  handleEvent(event: boolean) {
    this.opened = event;
  }
}
