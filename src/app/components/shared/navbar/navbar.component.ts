import { Component, OnInit, Input } from '@angular/core';
declare var require: any;
const data = require('../../../../../data/navbar/navbar.json');

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class SharedComponent implements OnInit {
  @Input()
  public titleRight;
  public data = data;

  constructor() { }

  ngOnInit() {
  }

}
