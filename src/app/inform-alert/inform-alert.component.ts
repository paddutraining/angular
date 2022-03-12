import { Component } from "@angular/core";

@Component({
    selector:'app-inform-alert',
    template:'<p>This is inform, you need to know!</p>',
    styles:[`
    p{
        padding:20px;
        background-color:paleyellow;
        border:1px solid yellow;
    }
    `]
})
export class InformAlertComponent{

}