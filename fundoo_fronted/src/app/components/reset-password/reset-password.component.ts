import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup ;
  submitted = false;
  inputText:string = 'password'

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      newpass: ['', [Validators.required, Validators.minLength(6)]],
      confirmpass: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  reset()
  {
    if(this.resetForm.valid){
      console.log(this.resetForm.value)
    }
  }
  showPassword(event:any):void
  {
    if(event.checked)
    {
      this.inputText='text';
    }
    else{
      this.inputText='password';
    }
  }

}
