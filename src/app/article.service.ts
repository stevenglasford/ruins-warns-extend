import { Injectable } from '@angular/core';
import {Article} from './article';
import {SubmitArticle} './submitArticle';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(){
    //TODO: only retreive a single article from the database, this will save time and computation for the end user.
    //TODO: make a function that will keep the first article in the database until the submit button is activated, then and only then move it to readArticle

    //get all of the articles currently in the database
    return this.http.get<Article[]>( 'https://studentdata-5330a.firebaseio.com/fakenews/unread.json?orderBy="$key"&limitToFirst=1')
    .pipe(map(responseData => {
      const articleArray: Article[] = [];
      const keyArray: string[] = [];
      for(const key in responseData){
        keyArray.push(key);
        articleArray.push(responseData[key]);
      }

      //Get the first entry in the database, then discard all of the other articles
      return {articleArray, keyArray};
    }))
  }

  addArticle(newArt: Article){
    return this.http.post("https://studentdata-5330a.firebaseio.com/fakenews/unread.json", newArt);
  }

  //TODO: after the user submits the needed data remove from the unread database and save it to the readArticle database with the additional information gained from the user 
  moveArticle(
    article: Article, 
    aFakeness: string, 
    aRating: number,
    aFeedback: string) : string{
    
    const aArticle: SubmitArticle = {
      title: article.title,
      author: article.author,
      url: article.url,
      body: article.body,
      fakeness: article.fakeness,
      answererFakeness: aFakeness,
      rating: aRating,
      feedback: aFeedback,
    }

    //return the fakeness answer
    return article.fakeness;
  }
}