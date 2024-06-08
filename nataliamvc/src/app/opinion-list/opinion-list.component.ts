import { Component } from '@angular/core';
import { Opinion } from '../opinion.model';
import { OpinionServiceService } from '../opinion-service.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-opinion-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './opinion-list.component.html',
  styleUrl: './opinion-list.component.scss',
})
export class OpinionListComponent {
  opinions: Opinion[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private opinionService: OpinionServiceService) {}

  ngOnInit(): void {
    this.opinionService.getOpinions().subscribe({
      next: (data) => {
        this.opinions = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      },
    });
  }
}
