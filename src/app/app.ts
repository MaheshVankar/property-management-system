import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Nav } from "./nav/nav";
import { Dashboard } from "./dashboard/dashboard";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Nav, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('deluxeapp');
}
