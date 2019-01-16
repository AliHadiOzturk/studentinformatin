import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html'
})
export class WelcomePageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  openStudentList(){
    this.route.navigate(["/studentlist"]);
  }

}
