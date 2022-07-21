import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import { UserService } from '../../services/Users/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm: FormGroup ;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private UserService:UserService) { }

  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
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