import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  aUrl: string; 
  aAuthor: string;
  aBody: string;
  aFakeness: string;
  aTitle: string;

  constructor(private artService: ArticleService) { }

  ngOnInit(): void {
  }

  addNewArticle(){
    const newArticle: Article = {
      title: this.aTitle,
      author: this.aAuthor,
      url: this.aUrl,
      body: this.aBody,
      fakeness: this.aFakeness
    }
    this.artService.addArticle(newArticle).subscribe(data => {
      console.log(data);
    })
  }

}