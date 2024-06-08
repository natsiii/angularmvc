import { Component } from '@angular/core';
import { OpinionFormComponent } from '../opinion-form/opinion-form.component';
import { OpinionListComponent } from '../opinion-list/opinion-list.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [OpinionFormComponent, OpinionListComponent, TranslocoModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
