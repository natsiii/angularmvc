import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-cookies-modal',
  standalone: true,
  imports: [NgIf, TranslocoModule],
  templateUrl: './cookies-modal.component.html',
  styleUrl: './cookies-modal.component.scss',
})
export class CookiesModalComponent implements OnInit {
  showModal: boolean = false;

  ngOnInit(): void {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      this.showModal = true;
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.showModal = false;
  }
}
