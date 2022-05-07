import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
subscription=["Basic", "Advanced", "Pro"];
defaultSubscription="Advanced";
  @ViewChild('f', { static: false })
  formData!: NgForm;
submitForm(){
  console.log(this.formData.value)
}
}
