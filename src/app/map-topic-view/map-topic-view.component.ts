import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-map-topic-view',
  templateUrl: './map-topic-view.component.html',
  styleUrls: ['./map-topic-view.component.css']
})
export class MapTopicViewComponent implements OnInit {
  topicList: any = [];
  topic: any = [];
  temp1: any = [];
  temp2: any = [];
  x: any = {};
  t: any = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/v1/topic/mongo/all').subscribe((data: any) => {

      this.topicList = data;
      this.temp1 = data;
      this.http.get('http://localhost:3000/api/v1/topic/all').subscribe((list: any) => {
        this.topic = list;
        list.forEach((item) => {
          this.x[item.topicId] = item.topicName;
        });
        data.forEach((item) => {
          item.topicId.forEach((topic, index) => {
            this.t.name = this.x[topic];
            this.t.id = topic;
            item.topicId[index] = this.t;
          });
          console.log(this.t);
        });
        console.log(data);
        console.log(this.x);
      });
    });
  }

}
