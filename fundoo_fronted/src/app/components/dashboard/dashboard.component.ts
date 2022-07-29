import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserviceService } from 'src/app/services/dataServices/dataservice.service';
import { UserNotesService } from 'src/app/services/usernotes/user-notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mobileQuery: MediaQueryList;
  searchActive: boolean = false;
  searchTerm: string = "";

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router,
    private snackBar:MatSnackBar,private dataService:DataserviceService,private UserNotesService:UserNotesService)
   {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  

  signout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
    window.location.reload();
  }
  
  openSnackBar() {
    this.snackBar.open('Signed out successfully', 'Ok', { duration: 2000 })
  }

  refresh(): void {
    window.location.reload();
  }
  recieveSearchNote(noteString: any) {
    console.log(noteString.target.value);
    this.searchTerm = noteString.target.value;
    this.dataService.SendData(this.searchTerm);
    this.searchActive = true;
    if(this.searchTerm.length == 0)
    {
      this.dataService.SendData(this.searchTerm);
    }
  }

}
// logout method localstorage.removeitem("token")