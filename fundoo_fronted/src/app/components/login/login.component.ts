import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import { UserService } from '../../services/Users/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  loginForm: FormGroup ;
  submitted = false;
  inputText:string = 'password'
  token: any;
  tokenExist: any = ""
 

  constructor(private formBuilder: FormBuilder, private UserService:UserService, 
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    
  });
  
  // this.tokenExist = localStorage.getItem("token");
  //   if(this.tokenExist?.length > 0) {
  //     this.router.navigateByUrl('/dashboard/note')
  //   }
  
  }
  login(){
    if(this.loginForm.valid){
      // console.log(this.loginForm.value)
      let reqData = {
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      return this.UserService.login(reqData).subscribe((response:any)=>{
        console.log("login response",response)
        localStorage.setItem("token",response.data)
        this.router.navigateByUrl('/dashboard/note')

      },(error)=>{
        console.log(error)
      })

    }else{
      console.log("login is invalid");
      
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
