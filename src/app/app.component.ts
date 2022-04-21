import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 eventNumbers:number[]=[]
 oddNumbers:number[]=[]
  emitedNumbers(EmittedNumber:number){
    if (EmittedNumber % 2 ==0){
this.eventNumbers.push(EmittedNumber)
    }else{
      this.oddNumbers.push(EmittedNumber)
    }
  }
}
