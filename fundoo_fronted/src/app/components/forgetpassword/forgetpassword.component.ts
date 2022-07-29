import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/Users/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm: FormGroup ;
  submitted = false;
  token: any;

  constructor(private formBuilder: FormBuilder,private UserService:UserService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
   
    console.log(this.token);
  }

  forget()
  {
    if(this.forgetForm.valid){
      console.log(this.forgetForm.value)

      let reqData ={
        email:this.forgetForm.value.email,
      }
      return this.UserService.forgetPass(reqData).subscribe((Response:any)=>{
        console.log(Response)

      },(error)=>{
        console.log(error)
      })
    }
    else{
      console.log("login is invalid");
  }
}


}