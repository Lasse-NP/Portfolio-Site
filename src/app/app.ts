import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Navbar } from './navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, MatIconModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio-Site');
  gitRotated = false;
  linkRotated = false;
  mailLifted = false;
  mailIcon = 'mail';

  onMailEnter() {
    this.mailLifted = true;
    this.mailIcon = 'drafts';
  }

  onMailLeave() {
    this.mailLifted = false;
    this.mailIcon = 'mail';
  }
}
