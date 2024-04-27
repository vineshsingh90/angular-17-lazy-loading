import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import LunaConsole from 'luna-console'
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  title = 'angular-poc';

  ngAfterViewInit(): void {
    const container: any = document.getElementById('container');
    const console = new LunaConsole(container);
    console.log('luna')
    console.log([1, 2, 3, , 4])
    console.table([1, 2, 3, , 4])
  }
}
