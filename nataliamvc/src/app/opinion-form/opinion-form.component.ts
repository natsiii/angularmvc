import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-opinion-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TranslocoModule],
  templateUrl: './opinion-form.component.html',
  styleUrl: './opinion-form.component.scss',
})
export class OpinionFormComponent implements OnInit {
  title = 'Formularz opinii';

  OpinionForm!: FormGroup;
  isSubmit = true;
  submitMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private translocoService: TranslocoService
  ) {}

  ngOnInit() {
    this.OpinionForm = this.formBuilder.group({
      name: ['', Validators.required],
      rate: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.OpinionForm.valid) {
      const formData = this.OpinionForm.value;

      fetch('http://localhost:4201/opinion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          this.submitMessage = this.translocoService.translate('opinionSent');
          this.OpinionForm.reset();
        })
        .catch((error) => {
          this.submitMessage = this.translocoService.translate('opinionError');
        })
        .finally(() => {
          this.isSubmit = true;
          setTimeout(() => {
            this.isSubmit = false;
          }, 5000);
        });
    }
  }
}
