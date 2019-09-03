import {Component} from '@angular/core';
 '@angular/core';
@Component({
    selector: 'app-fechaactual',
    templateUrl: './fecha_actual.component.html'
})

export class fecha_actualComponent {
    hoy: any = new Date();
}