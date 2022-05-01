import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServersService]

})
export class AppComponent implements OnInit {
  activeToInactive!: number;
  inactiveToActive!: number;
constructor(private count:CounterService){

}
ngOnInit(): void {
  this.activeToInactive=this.count.activeToInactive;
  this.inactiveToActive=this.count.inactiveToActive;
}
}
