import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  disableButton = false;
  constructor() { 
    setTimeout(() => {
      this.disableButton = true;
    }, 2000)
  }

  ngOnInit() {
  }

}
