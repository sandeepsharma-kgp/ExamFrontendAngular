import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {
  question : any = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/v1/question/all').subscribe((data: any) => {

      this.question = data;
      console.log(this.question);
    });
  }
  delete(id) {
    this.http.get('http://localhost:3000/api/v1/question/delete/' + id).subscribe((data: any) => {

      console.log(data);
    });
  }

}
