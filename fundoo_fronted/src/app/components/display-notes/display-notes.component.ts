import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';
import { HttpService } from 'src/app/services/httpService/http.service';
export interface DialogData { array: [] }

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {
  open = true;
  close = true;
  isPined = false;

  array: any[];

  getNotes:any;

  submitted = false;

  
  
  constructor( private HttpService:HttpService,private UserNotesService:UserNotesService) {  }

  @Input() item : {Title:any,Descreption:any,_id:any}={Title:"",Descreption:"",_id:""}
  
  ngOnInit(): void {
  }

  pinned() {
    this.close = !this.close;
  }
  dopin(set: boolean) {
    this.isPined = set;
  }
}
