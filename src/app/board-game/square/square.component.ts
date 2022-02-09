import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {


@Input() squareValue!:'X'|'Y';
  constructor() { }

  ngOnInit(): void {
  }

}
