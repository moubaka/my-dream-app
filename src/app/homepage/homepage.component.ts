import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public app_name: string;
  public user: any;

  constructor(private toastr: ToastrService) { 
    this.app_name = "My Dream App";
    this.user = {
      email: null,
      password: null
    };
  }

  ngOnInit() {
    
    // https://blog.jscrambler.com/how-to-create-angular-toastr-notifications/
  }
  
  public login():void {
    console.log('user', this.user);
    if (!this.user.email) {
      this.toastr.error("Please insert your email address.");
      return;
    }
    if (!this.user.password) {
      this.toastr.error("Please insert your password.");
      return;
    }

    this.toastr.info("We are working on it.")
  }

}
