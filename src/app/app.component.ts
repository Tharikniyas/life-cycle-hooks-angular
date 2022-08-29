import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "Angular " 

  message = "Hello";
  content = "Hello";
  hideChild=false;

  constructor() {
    console.log("AppComponent:Contructed");
  }

  ngOnChanges() {
    console.log("AppComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }

}


