import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

import { } from '@angular/forms';

//TODO: when the webpage loads have a popup page, but not a redirect or anything. This page will have an accept button that allows for the user's data gathered from the survey to be used for use in making a neural network to help identify fake news. 
import { AddArticleComponent } from './add-article/add-article.component';
import { DoNotAcceptTermsComponent } from './do-not-accept-terms/do-not-accept-terms.component';
import { DisclosureComponent } from './disclosure/disclosure.component';
import {HeaderComponent} from './article/header/header.component';

//for the slider
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [ 
    AppComponent, 
    AddArticleComponent, DoNotAcceptTermsComponent, DisclosureComponent, ArticleComponent, HeaderComponent, 
  ],
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule, MatCheckboxModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
