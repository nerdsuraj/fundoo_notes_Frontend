import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserNotesService {

  constructor(private httpService: HttpService) { }

  getNote(reqData: any){
    console.log("data in note service", reqData)

    let httpOption = {
      Headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.Post('notes', reqData, false, httpOption)
  }
}
