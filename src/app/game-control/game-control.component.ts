import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
incrementedNumber:number=0;
interval:any;
@Output() emitedNumbers=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }
onStartGame(){
  setInterval(()=>{
    this.interval=this.emitedNumbers.emit(this.incrementedNumber+1);
    this.incrementedNumber++;
        },1000)
}
onPauseGame(){
  clearInterval(this.interval);
}

}
