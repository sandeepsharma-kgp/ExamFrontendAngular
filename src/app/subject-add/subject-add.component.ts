import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {
  subject: any;
  class : any;
  board : any;
  serviceErrors : any;
  subjectName : any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
  }

  add() {
    this.subject = {};
    this.subject.subjectName = this.subjectName;
    this.subject.class = this.class;
    this.subject.board = this.board;
    console.log(this.subject);
    this.http.post('http://localhost:3000/api/v1/subject/add', this.subject)
      .subscribe(data => {
        console.log(data);
      }, error => {
        this.serviceErrors = error.error.error;
      });
  }

}
