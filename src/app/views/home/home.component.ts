import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
