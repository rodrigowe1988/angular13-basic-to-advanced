import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css'],
})
export class MyFirstComponentComponent implements OnInit {
  public name: string = 'Rodrigo';
  constructor() {}

  ngOnInit(): void {}
}
