import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent implements OnInit, OnChanges {
  @Input() housingLocation!: HousingLocation;

  @ViewChild('name', { static: true }) name!: ElementRef;
  // @viewChildren if more than 1 instance

  ngOnInit() {
    this.name.nativeElement.innerText = 'Varun';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('location changed');
  }
}
