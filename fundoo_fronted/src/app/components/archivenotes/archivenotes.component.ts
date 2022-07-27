import { Component, OnInit } from '@angular/core';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.css']
})
export class ArchivenotesComponent implements OnInit {

  noteArray:any;
  isArchivedNotes = true;

  constructor(private UserNotesService:UserNotesService) { }

  ngOnInit(): void {
    this. getArchivedNotesList()
  }

  getArchivedNotesList() {
    this.UserNotesService.getallnote().subscribe((response: any) => {
      this.noteArray = response.data;
      this.noteArray.reverse();
      this.noteArray = this.noteArray.filter((userNote: any) => {
        return userNote.isArchived === false;
      })
      console.log("Retrieved All Archived Notes Successfully", this.noteArray);
     
    })
  }
}
