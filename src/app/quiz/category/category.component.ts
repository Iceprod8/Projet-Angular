import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  standalone: false
})
export class CategoryComponent implements OnInit {
  allCategories: any[] = [];
  search = '';
  submitted = false;
  allCategories = this.categoryService.categoryContent;
  playerName: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategoryContent();
    this.categoryService.playerName = this.route.snapshot.params['playerName'];
    this.playerName = this.route.snapshot.params['playerName'];
  }

  goToCategory(categoryId: number) {
    this.router.navigate(['/quiz', this.playerName], { queryParams: { categoryId } });
  }

  submit() {
    this.submitted = true;
  }

}
