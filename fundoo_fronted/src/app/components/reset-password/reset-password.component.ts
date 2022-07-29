import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/Users/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  submitted = false;
  inputText: string = 'password'
  token: any;

  constructor(private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private UserService: UserService) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      newpass: ['', [Validators.required, Validators.minLength(6)]],
      confirmpass: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }


  reset() {
    if (this.resetForm.valid) {
      console.log(this.resetForm.value.password)

      let newpass = {
        password: this.resetForm.value.newpass
      }

      this.UserService.resetPass(newpass, this.token).subscribe((responce) => {
        console.log(responce);

      }, (error: any) => {
        console.log(error);
      })
    }
  }

  showPassword(event: any): void {
    if (event.checked) {
      this.inputText = 'text';
    }
    else {
      this.inputText = 'password';
    }
  }




}
