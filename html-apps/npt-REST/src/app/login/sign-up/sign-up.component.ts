import { Component, OnInit } from '@angular/core';
import {
  FormControl,
	FormGroup,
	Validators
} from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import { ValidatorService } from 'src/app/services/validator.service';

import { User } from '../../../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [ValidatorService, UserService]
})
export class SignUpComponent implements OnInit {
  success = '';
  registerForm: FormGroup;

  user = {
    userName: '',
    userEmail: '',
    userPassword: ''
  }

  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  passwordConfirmation: string;
  model: User;

  submitted: boolean = false;

  constructor(private validatorSvc: ValidatorService,
              private userSvc: UserService) {
    this.model = new User(this.userName, this.userEmail, this.userPassword);
    this.passwordConfirmation = '';
    this.submitted = false;
  }

  ngOnInit(): void {  
    this.registerForm = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]),
        confirmPassword: new FormControl('', [Validators.required])
      },
      {
        validators: this.validatorSvc
          .mustMatch('password', 'confirmPassword')
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void
  {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.user.userName = this.registerForm.value['username'];
    this.user.userEmail = this.registerForm.value['email'];
    this.user.userPassword = this.registerForm.value['password'];

    let value = this.registerForm.value;

    this.success = JSON.stringify(this.user);

    console.log("success: ", this.success);
    console.log("value: ", value);
    console.log("user: ", this.user);

    this.userSvc.addUser(this.user).subscribe(result => {
      alert(result.toString());
    });
  }
}
