import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserviceService } from 'src/app/services/dataServices/dataservice.service';

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
  searchString: any;
  noteArray=[];

  array: any;

  getNotes:any;
  submitted = false;
  @Output() updateNoteEvent = new EventEmitter<any>();
  // {Title:any,Descreption:any,_id:any,isDeleted:any}={Title:"",Descreption:"",_id:"",isDeleted:""}
  @Input() items : any;
  
  constructor( private dialog:MatDialog,private snackbar:MatSnackBar,
    private dataService:DataserviceService ,private UserNotesService:UserNotesService) {  }

  
  
  ngOnInit(): void {
    this.dataService.recievedData.subscribe((response: any) => {
      console.log("Data Recieved", response);
      this.searchString = response;
      })
    
  }

  pinned() {
    this.close = !this.close;
  }
  dopin(set: boolean) {
    this.isPined = set;
  }

  // for update note

  openDialog(item:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: "50%",
     
    data:item,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.refreshUpdatedNoteData(result)
      this.snackbar.open("updated note sucessfully done!!",'',{
        duration: 2000,
      })
    });
  }


  //refresh the page
  refreshUpdatedNoteData(event: any) {
    console.log(event)
    console.log(event?.length >= 0);
    this. getallnote();
    this.updateNoteEvent.emit(event);
    // this.updateNoteEvent.emit(event);
    }

    getallnote()
    {
      this.UserNotesService.getallnote().subscribe((reponse:any)=>{
        console.log("request data",reponse);
        this.noteArray = reponse.data;
        this.noteArray.reverse();
        // this.notesList = this.noteArray.filter((notedata: any) => {
        //   return notedata.isDeleted == false && notedata.isArchived == false;
        // })
       console.log("notelist data",this.noteArray);
        
        console.log("data from notesarray variable",this.noteArray);
      })
    }
    
}

