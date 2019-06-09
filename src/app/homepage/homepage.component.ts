import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  newUser:any;

  constructor() { }

  ngOnInit() {
    this.newUser = {};
    // https://blog.jscrambler.com/how-to-create-angular-toastr-notifications/
  }
  
  public saveUser():void {
    
  }

}
