import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  temp: any=[];
  name: any;
  constructor(private service: HttpService)
  {

  }
  call()
  {
    this.temp=this.service.getData().subscribe((res:any)=>
      {
      this.temp=res
    })
  }
  save()
  {

  
  let value={name:this.name}
  this.service.postData(value).subscribe(res=>
    {
      /* this.call(); */
      this.name='';
    })
}


}