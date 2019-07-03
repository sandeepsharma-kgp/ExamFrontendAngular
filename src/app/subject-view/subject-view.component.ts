import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// import { Ng2SmartTableModule } from 'ngx-smart-table';

@Component({
  selector: 'app-subject-view',
  templateUrl: './subject-view.component.html',
  styleUrls: ['./subject-view.component.css']
})
export class SubjectViewComponent implements OnInit {

  subject: any = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {


    this.http.get('http://localhost:3000/api/v1/subject/all').subscribe((data: any) => {

      this.subject = data;
      console.log(data);
    });
  }

  delete(id) {
    this.http.get('http://localhost:3000/api/v1/subject/delete/' + id).subscribe((data: any) => {

      console.log(data);
    });
  }



}
