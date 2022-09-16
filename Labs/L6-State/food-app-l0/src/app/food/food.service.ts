import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:3000/food"

  getFood() {
    return this.httpClient.get<FoodItem[]>(this.url);
  }

  updateFood(f: FoodItem): Observable<FoodItem> {
    const putUrl = this.url + "/" + f.id;
    return this.httpClient.put<FoodItem>(putUrl, f);
  }

  deleteFood(id: number): Observable<any> {
    console.log(id);
    return this.httpClient.delete<FoodItem>(this.url + "/" + id);
  }

  addFood(f: FoodItem): Observable<FoodItem> {
    return this.httpClient.post<FoodItem>(this.url, f);
  }
}
