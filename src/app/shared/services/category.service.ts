import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryContent: any[] = [];
  playerName: string = '';

  constructor(private http: HttpClient) { }

  getCategoryContent() {
    this.categoryContent.length = 0;
    this.http.get<any[]>('http://localhost:3000/categories').subscribe((categories) => {
      this.categoryContent.push(...categories);
    });
  } 
}
