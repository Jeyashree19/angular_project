import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  service: any;

  constructor(private httpclient:HttpClient) {

   }
   getData()
   {
    return this.httpclient.get(" http://localhost:3000/store")
   }
   postData(data:any)
   {
    return this.httpclient.post(" http://localhost:3000/store",data)
   }
 
}
