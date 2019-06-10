import { Component, OnInit } from '@angular/core';

import { ThemeService } from './../theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor(private themeService: ThemeService) { }
  ngOnInit() {
  }

  public changeEvent(value): void {

    console.log('args', arguments);

    if (value.checked == true) {
      //ThemeService.toggleDark();
      this.themeService.toggleDark();
    }
    else {
      //ThemeService.toggleLight();
      this.themeService.toggleLight();
    }

  }

}
