import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CounterComponent } from "./counter/counter.component";
import { ConfigService } from '../util/config.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, CounterComponent]
})
export class AppComponent {
  configService = inject(ConfigService);

  apiUrl = this.configService.readConfig().API_URL;

  constructor() {
    console.log(this.configService.readConfig().API_URL);
  }
}
