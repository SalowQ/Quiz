import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.css'],
})
export class DifficultyComponent implements OnInit {
  levels = ['Easy', 'Medium', 'Hard'];
  constructor() {}

  ngOnInit(): void {}
}
