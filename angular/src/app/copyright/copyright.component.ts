import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
@Component({
    selector: 'app-copyright',
    templateUrl: './copyright.component.html'
})

export class CopyrightComponent implements OnInit {
    copyright: String = ' C Productos ACME S.A. de C.V.';
    hoy: any = new Date();
    constructor() {}
    ngOnInit() {
    }
}