import { Component, OnInit } from '@angular/core';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.css']
})
export class GetallnotesComponent implements OnInit {
  noteArray:[];
  searchString: any;
  notesList=[];
  // of:any;

  constructor(private UserNotesService:UserNotesService) { }

  ngOnInit(): void {
    this.getallnote();
  }

 
  getallnote()
  {
    this.UserNotesService.getallnote().subscribe((reponse:any)=>{
      console.log("request data",reponse);
      this.noteArray = reponse.data;
      this.noteArray.reverse();
      this.notesList = this.noteArray.filter((notedata: any) => {
        return notedata.isDeleted == false && notedata.isArchived == false;
      })
     console.log("notelist data",this.notesList);
      
      console.log("data from notesarray variable",this.noteArray);
    })
  }
}
