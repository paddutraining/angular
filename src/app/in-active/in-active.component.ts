import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-in-active',
  templateUrl: './in-active.component.html',
  styleUrls: ['./in-active.component.css']
})
export class InActiveComponent implements OnInit {
  users!:string[];
  constructor(private server:ServersService){}

    ngOnInit(): void {
      this.users=this.server.inactiveServers;
    }
    onSetToActive(id:number){
      this.server.setActive(id);
    }
}
