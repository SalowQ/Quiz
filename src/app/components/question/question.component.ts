import { TriviaServiceService } from './../trivia-service.service';
import { Question } from './../question';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  constructor(
    private service: TriviaServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // const dif = this.route.snapshot.paramMap.get('dif');
    // console.log(dif);
    this.service.fetch('645cb17f7d263fd5097043e1').subscribe((Question) => {});

    const urlQuestions = 'https://the-trivia-api.com/v2/questions';
    const geted = this.http.get<Array<Question>>(urlQuestions);
    geted.subscribe((Array) => {
      // console.log(Array);
    });
  }
}
