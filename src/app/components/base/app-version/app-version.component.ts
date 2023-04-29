import { Component, OnInit } from '@angular/core';

import pkg from '../../../../../package.json';

@Component({
  selector: 'app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.scss']
})
export class AppVersionComponent implements OnInit {

  public appVersion

  constructor() {
    this.appVersion = pkg.version
  }

  ngOnInit(): void {
  }

}
