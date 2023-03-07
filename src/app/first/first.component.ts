import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  num: number = 10;
  constructor() {}

  ngOnInit(): void {}

  changeNum() {
    timer(3000).subscribe(() => {
      this.num = 100;
    });
  }
}
