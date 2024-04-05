import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  @Input() character: any;
  constructor() { }

  ngOnInit(): void {
   /*  console.log(this.character); */
  }
}
