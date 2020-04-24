import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ArticleService } from '../article.service';
import {map} from 'rxjs/operators';
import {Article} from '../article';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  isSubmitted = false;
  articles: Article[] = [];
  articleTitle: string = 'title';
  articleAuthor: string = 'author';
  articleURL: string = 'https://www.example.com';
  articleContent: string = 'hello';
  radioTitle: string;
  radioItems: Array<string>;

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

  constructor(private artService: ArticleService, 
              public fb: FormBuilder) { 
    this.radioTitle = 'Is this article Real or Fake?';
    this.radioItems = ['Real', 'Fake'];
  }

  ngOnInit() {
    //get the data on load
    this.fetchData(); 
  }

  fetchData(){
    this.artService.getArticles().subscribe(data =>{
      this.articles = data;
    })
  }

}