import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PlaceSearchResult } from './place-autocomplete.component';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card *ngIf="data?.address" class="mat-elevation-z5">
      <img
        class="place-image"
        mat-card-image
        [src]="data?.imageUrl"
        alt="Place Photo"
      />
      <mat-card-header>
        <img [src]="data?.iconUrl" mat-card-avatar />
        <mat-card-title>{{ data?.name }}</mat-card-title>
      </mat-card-header>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .place-image {
        height: 200px;
        object-fit: cover;
        object-position: center;
      }
    `,
  ],
})
export class PlaceCardComponent implements OnInit {
  @Input() data: PlaceSearchResult | undefined;

  constructor() {}

  ngOnInit(): void {}
}
