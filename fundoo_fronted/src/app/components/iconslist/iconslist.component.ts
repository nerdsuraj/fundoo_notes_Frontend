import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-iconslist',
  templateUrl: './iconslist.component.html',
  styleUrls: ['./iconslist.component.css']
})
export class IconslistComponent implements OnInit {
  @Input() card: any;
  @Output() color = new EventEmitter();
  @Input() childdata:any;

  /***************************************************************
   * List of colors that can be applied to card taken in an array
   **************************************************************/
   colorArray = [
    [
      { color: "#fff", name: "White" },
      { color: "#f28b82", name: "Red" },
      { color: "#fbbc04", name: "Orange" },
      { color: "#fff475", name: "Yellow" }
    ],

    [
      { color: "#ccff90", name: "Green" },
      { color: "#a7ffeb", name: "Teal" },
      { color: "#cbf0f8", name: "Blue" },
      { color: "#aecbfa", name: "Darkblue" }
    ],

    [
      { color: "#d7aefb", name: "Purple" },
      { color: "#fdcfe8", name: "Pink" },
      { color: "#e6c9a8", name: "Brown" },
      { color: "#e8eaed", name: "Gray" }
    ]
  ];


  constructor(private UserNotesService:UserNotesService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }


  trashNote(){
    console.log(this.childdata._id)
    let reqData={
  noteid:[this.childdata._id],
  isDeleted:true,
}
console.log(reqData);
    this.UserNotesService.trashNote(reqData).subscribe((response:any)=>{
      console.log("inside the iconslist trash",response.data)
 
      this.snackbar.open("note deleted!!",'',{
        duration: 2000,
      });

    },error=>{
      console.log(error)
    })
  }
















  // colorsEdit(color: any, card: { color: any; } | undefined) {
  //   console.log(card, "cardd..............");
  //   console.log(color, "color........");
  //   if (card == undefined) {
  //     this.color.emit(color);
  //   } else {
  //     card.color = color;
  //     this.updateColor(color, card);
  //   }
  // }

  // updateColor(color: boolean, card: { color: any; }) {
  //   console.log(card, "card..");
  //   console.log((card.color = color), "color..");
  //   this.UserNotesService.updateColor( color ).subscribe(
  //       data => {
  //         console.log(data, "update color data");
  //       },
  //       err => {
  //         console.log(err, "err");
  //       }
  //     );
  // }




}
