import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isOpen = false;

  @Output() event = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.event.emit(this.isOpen);
    console.log(this.isOpen);
  }
}
