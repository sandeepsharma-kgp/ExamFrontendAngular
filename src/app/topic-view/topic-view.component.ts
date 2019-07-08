import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// import { Ng2SmartTableModule } from 'ngx-smart-table';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

  topic: any = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {


    this.http.get('http://localhost:3000/api/v1/topic/all').subscribe((data: any) => {

      this.topic = data;
      console.log(data);
    })
  }

  delete(id) {
    this.http.get('http://localhost:3000/api/v1/topic/delete/' + id).subscribe((data: any) => {

      console.log(data);
    });
  }

  }
