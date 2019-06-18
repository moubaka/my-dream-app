import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


declare var talkify : any;
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
    // test
    // https://blog.jscrambler.com/how-to-create-angular-toastr-notifications/
    callPlayer();
   
  }
  
  public login():void {
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


function callPlayer() {
  

  talkify.config = {
    remoteService: {
        host : 'https://talkify.net',
        apiKey : '2ba41589-f90f-423b-b893-2f4af75c1ec3',
        active: false //True to use Talkifys language engine and hosted voices. False only works for Html5Player.
    },
    ui:
    {
        audioControls: { //If enabled, replaces the built in audio controls. Especially good for the Web Speech API bits
            enabled: false,
            container: document.body
        }
    },
    keyboardCommands: { //Ctrl + command
        enabled: false,
        commands: { // Configure your own keys for the supported commands
            playPause: 32,
            next: 39,
            previous: 37
        }
    },
    voiceCommands: {
        enabled: false,
        keyboardActivation: { //Ctrl + command
            enabled: true,
            key: 77
        },
        commands: { // Configure your own phrases for the supported commands
            playPause: ["play", "pause", "stop", "start"],
            next: ["play next", "next"],
            previous: ["play previous", "previous", "back", "go back"]
        }
    }
  }
  var player = new talkify.Html5Player().enableTextHighlighting();

    new talkify.playlist()
        .begin()
        .usingPlayer(player)
        .withTextInteraction()
        .withRootSelector()
        .build()
        .play();
}