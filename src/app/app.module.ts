import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubjectViewComponent } from './subject-view/subject-view.component';
import { TopicViewComponent } from './topic-view/topic-view.component';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { TopicAddComponent } from './topic-add/topic-add.component';
import { TopicEditComponent } from './topic-edit/topic-edit.component';
import { MapTopicViewComponent } from './map-topic-view/map-topic-view.component';
import { MapTopicAddComponent } from './map-topic-add/map-topic-add.component';
import { QuestionViewComponent } from './question-view/question-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { QuestionAddComponent } from './question-add/question-add.component';
import { QuestionPreviewComponent } from './question-preview/question-preview.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SubjectViewComponent,
    TopicViewComponent,
    SubjectEditComponent,
    SubjectAddComponent,
    TopicAddComponent,
    TopicEditComponent,
    MapTopicViewComponent,
    MapTopicAddComponent,
    QuestionViewComponent,
    NotFoundComponent,
    QuestionEditComponent,
    QuestionAddComponent,
    QuestionPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // Ng2SmartTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
