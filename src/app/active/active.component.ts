import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  users!: string[];
  constructor(private server:ServersService){}

  ngOnInit(): void {
    this.users=this.server.activeServers;
  }
  onSetToInactive(id:number){
this.server.setInactive(id);
  }

}
