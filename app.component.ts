import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title = 'AngularDemo';
  result!:number;
  Add(num1:string, num2:string)
  {
    this.result=parseFloat(num1)+parseFloat(num2);
  }
}
