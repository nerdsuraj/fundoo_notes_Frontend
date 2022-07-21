import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registration(reqData: any) {
    console.log("data in user service", reqData)

    let httpOption = {
      Headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }

    return this.httpService.Post('users', reqData, false, httpOption)

  }

  login(reqData: any) {
    console.log("inside the user.service", reqData);

    let httpOption = {
      Headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.Post('users/login', reqData, false, httpOption)
  }

  forgetPass(reqData: any) {
    console.log("inside the user.service", reqData);
    let httpOption = {
      Headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.Post('users/forgotpassword', reqData, false, httpOption)
  }
  resetPass() {

  }
}
