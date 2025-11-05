import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';

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

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategoryContent().subscribe((categories) => {
      this.allCategories = categories;
    });
  }

  submit() {
    this.submitted = true;
  }

}
