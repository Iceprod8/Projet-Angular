import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from "../../shared/services/quiz.service";
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  standalone: false
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent;
  selectedCategoryId?: number;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.queryParamMap.get('categoryId');
    const categoryId = idParam ? Number(idParam) : undefined;
    this.selectedCategoryId = categoryId;
    if (this.categoryService.categoryContent.length === 0) {
      this.categoryService.getCategoryContent();
    }
    this.quizService.getQuizContent(categoryId);
  }

  get categoryLabel(): string | undefined {
    if (!this.selectedCategoryId) return undefined;
    const cat = this.categoryService.categoryContent.find(c => c.id === this.selectedCategoryId);
    return cat?.label;
  }

  addAnswer(answer: string, questionId: number) {
    this.quizService.addAnswer(answer, questionId);
  }
}
