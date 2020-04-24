import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ArticleService } from '../article.service';
import {map} from 'rxjs/operators';
import {Article} from '../article';
import {FormBuilder, Validators} from "@angular/forms";
import {KeyArticle} from '../keyArticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  articles: Article[] = [];
  kArticles: KeyArticle[] = [];
  tempArticle: KeyArticle = {
    title: '',
    author: '',
    url: '',
    body: '',
    fakeness: '',
    key: '',
  }
  keys: string[] = [];
  isSubmitted = false;
  articleTitle: string = 'title';
  articleAuthor: string = 'author';
  articleURL: string = 'https://www.example.com';
  articleContent: string = 'hello';
  radioTitle: string;
  radioItems: Array<string>;
  firstArticle: KeyArticle;

    constructor(
      private artService: ArticleService, 
      public fb: FormBuilder) { 
        this.radioTitle = 'Is this article Real or Fake?';
        this.radioItems = ['Real', 'Fake'];
    }
  
  ngOnInit(): void {
    //get the data on load
    this.fetchData(); 
  }

  fetchData(){
    this.artService.getArticles().subscribe(data =>{
      //reset the data on a reload
      let i: number = 0;
      this.articles = null;
      this.keys = null;
      while (i < this.kArticles.length){
        this.kArticles.pop();
      }
      //set the data backups and use the backups to write "carefully"
      this.articles = data.articleArray;
      this.keys = data.keyArray;
      i = 0;
      while (i < this.articles.length){
        const newArt: KeyArticle = {
          title: this.articles[i].title,
          author: this.articles[i].author,
          url: this.articles[i].url,
          body: this.articles[i].body,
          fakeness: this.articles[i].fakeness,
          key: this.keys[i],
        }
        this.kArticles.push(newArt);
        i++;
      }
      this.firstArticle = this.kArticles[0];
    })
  }

  fakenessForm = this.fb.group({
    fakeness: ['', [Validators.required]]
  })

  get myForm() {
    return this.fakenessForm.get('fakeness');
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.fakenessForm.valid){
      return false;
    } else {
      //TODO: instead of making an alert of the data collected on submit, send the data to the firebase server.
      console.log(this.fakenessForm.value)
    }
  }


}