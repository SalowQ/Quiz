import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  opened = false;

  @Output() event = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.opened = !this.opened;
    let openedSon = this.opened;
    this.event.emit(openedSon);
  }
}
