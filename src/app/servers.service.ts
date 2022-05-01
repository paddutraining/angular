import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
activeServers=['preproduction','production']
inactiveServers=['staging']
  constructor(private counter:CounterService) { }
  setActive(id:number){
    this.activeServers.push(this.inactiveServers[id])
this.inactiveServers.splice(id,1);
this.counter.InactiveCountToactive();

  }
  setInactive(id:number){
    this.inactiveServers.push(this.activeServers[id])
this.activeServers.splice(id,1)
this.counter.activeToInactiveCount();
  }
}
