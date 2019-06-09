import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public app_name: string;
  public newUser: any;

  constructor(private toastr: ToastrService) { 
    this.app_name = "My Dream App";

    this.constructNewUserObj();
  }

  ngOnInit() {
  }

  private constructNewUserObj() : void {
    this.newUser = {
      fullname: null,
      username: null,
      email: null,
      password: null,
      confirmpassword: null
    }
  }

  public create_new_user(): void {
    if (!this.newUser.fullname) {
      this.toastr.error("Please insert your fullname.");
      return;
    }
    if (!this.newUser.username) {
      this.toastr.error("Please insert your username.");
      return;
    }
    if (!this.newUser.email) {
      this.toastr.error("Please insert your email address.");
      return;
    }
    if (!this.newUser.password) {
      this.toastr.error("Please insert your password.");
      return;
    }
    if (!this.newUser.confirmpassword) {
      this.toastr.error("Please confirm your password.");
      return;
    }
    if (this.newUser.password != this.newUser.confirmpassword) {
      this.toastr.error("Your password and confirmation password do not match.");
      return;
    }

    this.toastr.info("We are working on it.")
  }

  public reset_new_user() :void {
    this.constructNewUserObj();
  }

}
