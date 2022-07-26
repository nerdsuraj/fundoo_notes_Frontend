import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserNotesService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token");
  }

  getNote(reqData: any) {
    console.log("data in note service", reqData)

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': " br " + this.token,
      })
    }
    return this.httpService.Post('notes', reqData, true, httpOption)
  }

  getallnote() {

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': " br " + this.token,
      })
    }
    return this.httpService.Get('notes', true, httpOption)
  }


  trashNote(id: any) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': " br " + this.token,
      })
    }
    return this.httpService.put("notes/" + id + "/isTrashed", null,true, httpOptions)

  }







  // updateColor(data: boolean) {
  //   let httpOption = {
  //     headers: new HttpHeaders({
  //       'content-type': 'application/json',
  //       'Authorization':" br " + this.token,
  //     })
  //   }
  //   return this.httpService.put('updateColor', data,true,httpOption)
  // }

}

