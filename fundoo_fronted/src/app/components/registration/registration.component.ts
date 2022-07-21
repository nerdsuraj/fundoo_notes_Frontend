import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import { UserService } from '../../services/Users/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

   registerForm: FormGroup ;
   submitted = false;
   inputText:string = 'password'
  
  

  constructor(private formBuilder: FormBuilder, private UserService: UserService,private snackbar:MatSnackBar) { }
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  });
     
  }
  //observable and promises
  register(){
    if(this.registerForm.valid){
      // console.log(this.registerForm.value)
      let reqData ={
        firstname:this.registerForm.value.firstName,
        lastname:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
      }
      this.UserService.registration(reqData) .subscribe((response:any)=>{
        console.log(response)
        //snack bar will be added here
        this.snackbar.open("Registration sucessfully done!!",'',{
          duration: 3000,
        })
      },(error)=>{
        console.log(error)
      }
        )
    }else{
      console.log("form is inValid");
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
