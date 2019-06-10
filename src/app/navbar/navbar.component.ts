import { Component, OnInit } from '@angular/core';

import { ThemeService } from './../theme.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public changeEvent(value):void {
      if (value.checked == true ) {
        ThemeService.toggleDark()
      }
      else {
        ThemeService.toggleLight()
      }

    }
  

    ngOnInit() {
  }

}
