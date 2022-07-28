import { Component, OnInit } from '@angular/core';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.css']
})
export class GetallnotesComponent implements OnInit {
  noteArray:any;

  constructor(private UserNotesService:UserNotesService) { }

  ngOnInit(): void {
    this.getallnote();
  }

 
  getallnote()
  {
    this.UserNotesService.getallnote().subscribe((request:any)=>{
      console.log("request data",request);
      this.noteArray = request.data;
      this.noteArray.reverse();
      this.noteArray = this.noteArray.filter((notedata: any) => {
        return notedata.isDeleted === false && notedata.isArchived == false;
      })
      console.log("data from notesarray variable",this.noteArray);
    })
  }
}
