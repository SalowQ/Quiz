import { TriviaService } from './../trivia.service';
import { Question } from './../question';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  Question?: Question;
  answers: string[] = [];

  constructor(private service: TriviaService, private route: ActivatedRoute) {}

  ngOnInit() {
    const dif = this.route.snapshot.paramMap.get('dif') ?? '';
    console.log(dif);

    this.service.fetch(dif).subscribe((Array) => {
      const QuestionSelected = Array[0];
      console.log(QuestionSelected);
      this.Question = {
        category: QuestionSelected.category,
        id: QuestionSelected.id,
        tags: QuestionSelected.tags,
        difficulty: QuestionSelected.difficulty,
        regions: QuestionSelected.regions,
        isNiche: QuestionSelected.isNiche,
        question: QuestionSelected.question,
        correctAnswer: QuestionSelected.correctAnswer,
        incorrectAnswers: QuestionSelected.incorrectAnswers,
        type: 'text_choice',
      };

      this.shuffleAnswers();
    });
  }

  shuffleAnswers() {
    this.answers = [
      this.Question?.correctAnswer ?? '',
      this.Question?.incorrectAnswers[0] ?? '',
      this.Question?.incorrectAnswers[1] ?? '',
      this.Question?.incorrectAnswers[2] ?? '',
    ];

    this.shuffleArray(this.answers);
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
