import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
// export class RegisterComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

export class RegisterComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;
  guid: string;
  serviceErrors: any = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    // 	this.http.get('/api/v1/generate_uid').subscribe((data:any) => {
    //     this.guid = data.guid;
    //   }, error => {
    //       console.log("There was an error generating the proper GUID on the server", error);
    //   });
  }
  invalidFirstName() {
    return (this.submitted && (this.serviceErrors.name != null || this.userForm.controls.name.errors != null));
  }
  invalidEmail() {
    return (this.submitted && (this.serviceErrors.email != null || this.userForm.controls.email.errors != null));
  }
  invalidPassword() {
    return (this.submitted && (this.serviceErrors.password != null || this.userForm.controls.password.errors != null));
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      // last_name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(75)]],
      // zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    });
  }


  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid == true) {
      return;
    }
    else {
      let data: any = Object.assign(this.userForm.value);
      console.log(data);

      this.http.post('http://localhost:3000/register', data)
      .subscribe(data => {

        // let path = '/user/' + data.customer.uid;
        console.log(data);

        this.router.navigate(["/register"]);
      }, error => {
        this.serviceErrors = error.error.error;
      });

      this.registered = true;

    }
  }
};
