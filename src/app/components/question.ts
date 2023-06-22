export interface Question {
  category: string;
  id: string;
  tags: Array<string>;
  difficulty: string;
  regions?: Array<string>;
  isNiche: boolean;
  question: {
    text: string;
  };
  correctAnswer: string;
  incorrectAnswers: Array<string>;
  type: 'text_choice';
}
