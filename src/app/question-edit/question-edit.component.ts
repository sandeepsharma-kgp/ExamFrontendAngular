import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
  question : any = {};
  qid : any;
  serviceErrors : any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.qid = this.route.snapshot.paramMap.get("id")
    this.http.get('http://localhost:3000/api/v1/question/edit/' + this.qid).subscribe((data: any) => {

      this.question = data[0];
      console.log(this.question);
    });
  }
  update() {
    this.http.post('http://localhost:3000/api/question/update', this.question)
      .subscribe(data => {
        console.log(data);
      }, error => {
        this.serviceErrors = error.error.error;
        console.log(this.serviceErrors);
      });
    console.log(this.question);
  }

}
