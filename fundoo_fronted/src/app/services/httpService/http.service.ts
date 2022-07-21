import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  Endurl= environment.StartUrl;

  constructor(private httpClient : HttpClient) { }

  Post(url: string, reqData: any, token: boolean ,httpOption: any={} )
  {
    console.log("inside http service ",reqData);
   return this.httpClient.post(this.Endurl+url, reqData, token && httpOption)
  }

  get()
  {

  }
 
 

// for notes http service


}
