import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { FetchDataComponent } from "./fetchdata/fetchdata.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptModule,
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
