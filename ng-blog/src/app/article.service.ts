import { Injectable } from "@angular/core";
import { Article } from "./article";
import { ARTICLES } from "./mock-articles";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor() {}
  getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;
    return of(articles);
  }

  getArticle(key: string): Observable<Article> {
    const articles: Article[] = ARTICLES.filter(a => a.key === key);
    return of(articles[0]);
  }
}
