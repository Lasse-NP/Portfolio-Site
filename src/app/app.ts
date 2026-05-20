import { Component, signal, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BoltIcon, MailCheckIcon, BriefcaseBusinessIcon } from 'ng-animated-icons';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
// import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgToastComponent, NgOptimizedImage, BoltIcon, MailCheckIcon, BriefcaseBusinessIcon],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio-Site');
  private toast = inject(NgToastService);

  copyMessage(val: string){
    navigator.clipboard.writeText(val).then(() => {
      this.toast.success('Email copied to clipboard!', 'Copied!', 2000);
    });
  }
}
