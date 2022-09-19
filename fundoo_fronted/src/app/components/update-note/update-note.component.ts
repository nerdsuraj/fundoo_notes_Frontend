import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {
  open = true;
  close = true;
  isPined = false;

  title:any;
  description:any;
  id:any;


  constructor(private UserNotesService:UserNotesService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) 
    {
      this.title = data.Title;
      this.description = data.Descreption;
      this.id = data._id;

     }
     onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }
  pinned() {
    this.close = !this.close;
  }
  dopin(set: boolean) {
    this.isPined = set;
  }

closeDialog()
{
  let reqdata={
    Title:this.title,
    Descreption:this.description,
    _id:this.id
  }
  this.UserNotesService.updateService(reqdata).subscribe((response:any)=>{
    console.log("update response",response)
    this.dialogRef.close(response)
  })
}


//color note
refreshUpdatedNoteData(newNoteData: any) {
  // if(newNoteData.success === false){ 
  //   // console.log("After updation", this.data)
  // }
  // else if (newNoteData?.[0] != null) {
  //   console.log(this.data)
  //   // this.data.imageList.push(newNoteData?.[0])
  //   // console.log("After updation", this.data)
  // }
  // else {
  //   this.data.color = newNoteData.color
  // }
}

}
