import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'


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

  Get(url: string ,token: boolean ,httpOption:any={})
  {
    // console.log("inside http service ",reqData);
    return this.httpClient.get(this.Endurl+url, token && httpOption)
  }
 
  put(url: string,body:any, token: boolean ,httpOption:any={}) {
    return this.httpClient.put(this.Endurl+url,body,token && httpOption);
    }
   
    patchService(url: string, reqData: any, token: boolean, httpOptions: any={}) {
      return this.httpClient.patch(this.Endurl + url, reqData, token && httpOptions);
    }

  }
 

// for notes http service

// getHttp(url: any) {
  
//   const userid=localStorage.getItem('userid');
//   const httpTocken = {
//     headers: new HttpHeaders({
//       "content-Type": "application/json",
//      token: localStorage.getItem("token")
//     })
//   };
//   return this.http.post(this.Endurl + url+'/'+userid, reqData, token && httpOption);
// }




