import { Component, OnInit } from '@angular/core';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  noteArray:any;
  
  constructor(private UserNotesService:UserNotesService) { }

  ngOnInit(): void {
    this.getTrashNotesList();
  }
  getTrashNotesList() {
    this.UserNotesService.getallnote().subscribe((response: any) => {
      this.noteArray = response.data;
      this.noteArray.reverse();
      this.noteArray = this.noteArray.filter((userNote: any) => {
        return  userNote.isDeleted === true;
      })
      console.log("Retrieved All trash Notes Successfully", this.noteArray);
     
    })
  }

}
