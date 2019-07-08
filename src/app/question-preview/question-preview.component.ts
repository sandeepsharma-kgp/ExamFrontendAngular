import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-question-preview',
  templateUrl: './question-preview.component.html',
  styleUrls: ['./question-preview.component.css']
})
export class QuestionPreviewComponent implements OnInit {
  question: any = {};
  qid: any;


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.qid = this.route.snapshot.paramMap.get("id")
    this.http.get('http://localhost:3000/api/v1/question/edit/' + this.qid).subscribe((data: any) => {

      this.question = data[0];
      console.log(this.question);
    });
  }
}
