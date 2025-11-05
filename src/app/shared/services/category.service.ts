import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryContent: any[] = [];

  constructor(private http: HttpClient) { }

  getCategoryContent() {
    this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
      this.categoryContent = categories;
    });
  }

  
}