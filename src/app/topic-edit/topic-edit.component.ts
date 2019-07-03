import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class TopicEditComponent implements OnInit {
  topic : any;
  topicId : any;
  serviceErrors: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.topicId = this.route.snapshot.paramMap.get("id")
    console.log(this.topicId);
    if (this.topicId.length != 0) {
      this.http.get('http://localhost:3000/api/v1/topic/edit/' + this.topicId).subscribe((data: any) => {
        console.log(data);
        this.topic = data[0];
      })
    }
  }

  update() {
    this.http.post('http://localhost:3000/api/topic/update', this.topic)
      .subscribe(data => {
        console.log(data);
      }, error => {
        this.serviceErrors = error.error.error;
      });
    console.log(this.topic);
  }

}
