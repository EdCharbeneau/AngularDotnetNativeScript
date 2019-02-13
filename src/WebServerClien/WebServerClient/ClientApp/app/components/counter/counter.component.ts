import { Component } from '@angular/core';
import { CounterComponentBase } from '../../sharedLibs/CounterComponentBase'

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent extends CounterComponentBase { }
