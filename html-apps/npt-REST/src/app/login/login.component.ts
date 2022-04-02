import { Component, OnInit } from '@angular/core';
import {
  FormControl,
	FormGroup,
	Validators
} from "@angular/forms";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  success = '';
  loginForm: FormGroup;
  submitted: boolean = false;

  user = {
    userName: '',
    userPassword: ''
  }

  constructor(private userSvc: UserService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ])
      }
    );
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void
  {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.user.userName = this.loginForm.value['username'];
    this.user.userPassword = this.loginForm.value['password'];

    let value = this.loginForm.value;

    this.success = JSON.stringify(this.user);

    this.userSvc.addUser(this.user).subscribe(result => {
      alert(result.toString());
    });
  }

}
