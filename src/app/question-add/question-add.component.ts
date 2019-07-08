import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {
  topic: any = [];
  subject: any = [];
  selectedData: any = {};
  subjectSelected: any;
  board: any;
  class: any;
  topicName: any = [];
  topicList: any;
  topicSelected: any;
  question: any;
  questionName: any; option1: any; option2: any; option3: any; option4: any; solution: any; level: any; answerKey: any = [];
  answerKey1: any; answerKey2: any; answerKey3: any; answerKey4: any; uploadImage: any = [];
  myGroup: any;
  file: any = [];
  uploadForm: FormGroup;
  filesToUpload: Array<File>;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private http: HttpClient) {
    this.filesToUpload = [];
   }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/v1/topic/all').subscribe((data: any) => {

      this.topic = data;
      console.log(data);
    });

    this.http.get('http://localhost:3000/api/v1/subject/all').subscribe((data: any) => {

      this.subject = data;
      console.log(data);
    });
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  getTopic() {
    this.selectedData.subject = this.subjectSelected;
    this.selectedData.class = this.class;
    this.selectedData.board = this.board;
    console.log(this.selectedData);
    this.http.post('http://localhost:3000/api/v1/topic/mongo/', this.selectedData).subscribe((data: any) => {

      this.subject = data;
      this.http.post('http://localhost:3000/api/v1/topic/name/', data[0]).subscribe((list: any) => {

        this.topicList = list;
        console.log(list);
      });
    });

  }

  onFileChanged1(fileInput: any) {
    // this.file[0] = event.target.files[0];
    // console.log(this.file);
    // if (event.target.files.length > 0) {
      this.filesToUpload = <Array<File>> fileInput.target.files;
      console.log(this.filesToUpload)
      // }
  }
  onFileChanged2(event) {
    this.file[1] = event.target.files[0];
    console.log(this.file);
  }
  onFileChanged3(event) {
    this.file[2] = event.target.files[0];
    console.log(this.file);
  }
  onFileChanged4(event) {
    this.file[3] = event.target.files[0];
    console.log(this.file);
  }
  onFileChanged5(event) {
    this.file[4] = event.target.files[0];
    console.log(this.file);
  }
  onFileChanged6(event) {
    this.file[5] = event.target.files[0];
    console.log(this.file);
  }
  // update(val) {
  //   if (this.answerKey.indexOf(val) == -1) {
  //     this.answerKey.push(val);
  //   } else {
  //     this.answerKey.splice(this.answerKey.indexOf(val), 1);
  //   }
  //   console.log("Success");
  //   console.log(this.answerKey);
  // }

  add() {
    // this.question = {};
    // this.question.questionName = this.questionName;
    // this.question.option1 = this.option1;
    // this.question.option2 = this.option2;
    // this.question.option3 = this.option3;
    // this.question.option4 = this.option4;
    // this.question.solution = this.solution;
    // this.question.level = this.level;
    // this.question.answerKey = this.answerKey;
    // this.question.option1Image = this.option1Image;
    // console.log(this.question);
    // console.log(this.question);
    // var formData = new FormData();
    // formData.append('file', this.uploadForm.get('profile'));

    // this.myGroup = new FormGroup({
    //   profile: new FormControl()
    //
    console.log(this.uploadForm.get('profile').value)
console.log(this.uploadForm.get('profile'))
    this.http.post<any>('http://localhost:3000/question/add',[], this.filesToUpload).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    // this.http.post('http://localhost:3000/question/add', this.question).subscribe((data: any) => {
    //
    //   console.log(data);
    // });
  }



}
