import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.css']
})
export class TakeNotesComponent implements OnInit {
  open = true;
  close = true;
  isPined = false;

  usernote: FormGroup ;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private snackbar:MatSnackBar,  private UserNotesService:UserNotesService) { }

  ngOnInit(): void {
    this.usernote = this.formBuilder.group({
      noteTitle: ['', Validators.required],
      noteContent: ['', Validators.required],
     
  });
    
  }

  display() {
    this.open = !this.open;
  }
  pinned() {
    this.close = !this.close;
  }
  dopin(set: boolean) {
    this.isPined = set;
  }

  // api call

  addNote(){
    if(this.usernote.valid){
      let reqData ={
        Title:this.usernote.value.noteTitle,
        Descreption:this.usernote.value.noteContent, 
      }
      // console.log(reqData)
      this.UserNotesService.getNote(reqData) .subscribe((response:any)=>{
        console.log(response)
        //snack bar will be added here
        // this.snackbar.open("notes created !!",'',{
        //   duration: 3000,
        // })
      },(error)=>{
        console.log(error)
      })
    }
      
  }
}
