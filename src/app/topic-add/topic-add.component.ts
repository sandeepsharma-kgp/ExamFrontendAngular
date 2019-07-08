import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrls: ['./topic-add.component.css']
})
export class TopicAddComponent implements OnInit {
  topic : any;
  topicName :any;
  serviceErrors: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
  }
  add() {
    this.topic = {};
    this.topic.topicName = this.topicName;
    console.log(this.topic);
    this.http.post('http://localhost:3000/uniquetopic/add', this.topic)
      .subscribe(data => {
        console.log(data);
      }, error => {
        this.serviceErrors = error.error.error;
      });
  }

}
