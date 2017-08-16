import { Component } from '@angular/core';
import { CounterComponentBase } from '../../sharedLibs/CounterComponentBase'

@Component({
    selector: 'Counter',
    moduleId: module.id,
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})

export class CounterComponent extends CounterComponentBase { }
