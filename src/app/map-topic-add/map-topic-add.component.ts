import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-map-topic-add',
  templateUrl: './map-topic-add.component.html',
  styleUrls: ['./map-topic-add.component.css']
})
export class MapTopicAddComponent implements OnInit {
  subject : any =[];
  mapData : any = {};
  class: any;
  board : any;
  subjectSelected : any;
  topicSelected : any;
  serviceErrors : any;
  topic : any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/v1/topic/all').subscribe((data: any) => {

      this.topic = data;
      console.log(data);
    });

    this.http.get('http://localhost:3000/api/v1/subject/all').subscribe((data: any) => {

      this.subject = data;
      console.log(data);
    });
  }
  add(){
    this.mapData.class = this.class;
    this.mapData.board = this.board;
    this.mapData.subject = this.subjectSelected;
    this.mapData.topicId = this.topicSelected;
    console.log(this.mapData);
    this.http.post('http://localhost:3000/api/topicdropdown/add', this.mapData)
      .subscribe(data => {
        console.log(data);
      }, error => {
        this.serviceErrors = error.error.error;
      });
  }

}
