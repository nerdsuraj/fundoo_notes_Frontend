import { Component, OnInit } from '@angular/core';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.css']
})
export class ArchivenotesComponent implements OnInit {

  noteArray:any;
  isArchivedNotes = true;

  constructor(private UserNotesService:UserNotesService,private dialog:MatDialog,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this. getArchivedNotesList()
  }

  getArchivedNotesList() {
    this.UserNotesService.getallnote().subscribe((response: any) => {
      this.noteArray = response.data;
      this.noteArray.reverse();
      this.noteArray = this.noteArray.filter((userNote: any) => {
        return userNote.isArchived === true && userNote.isDeleted === false;
      })
      console.log("Retrieved All Archived Notes Successfully", this.noteArray);
     
    })
  }

  openDialog(item:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: "50%",
     
    data:item,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.snackbar.open("updated note sucessfully done!!",'',{
        duration: 2000,
      })
    });
  }
}
