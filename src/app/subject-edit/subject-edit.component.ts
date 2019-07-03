import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {
  submitted: false;
  SID: any;
  subject: any;
  serviceErrors: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.SID = this.route.snapshot.paramMap.get("id")
    console.log(this.SID);
    if (this.SID.length != 0) {
      this.http.get('http://localhost:3000/api/v1/subject/edit/' + this.SID).subscribe((data: any) => {
        console.log(data);
        this.subject = data[0];
      })
    }

  }

  update() {
    this.http.post('http://localhost:3000/api/subject/update', this.subject)
      .subscribe(data => {
        console.log(data);
      }, error => {
        this.serviceErrors = error.error.error;
      });
    console.log(this.subject);
  }

}
