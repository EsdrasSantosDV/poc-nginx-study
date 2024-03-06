import { Component } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [CounterComponent]
})
export class HeaderComponent {
  title = 'ESDRAS';
}
