import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {
  open = true;
  close = true;
  isPined = false;


  constructor() { }

  ngOnInit(): void {
  }
  pinned() {
    this.close = !this.close;
  }
  dopin(set: boolean) {
    this.isPined = set;
  }

}
