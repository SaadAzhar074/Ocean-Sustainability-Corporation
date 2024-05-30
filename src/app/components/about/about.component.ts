import { Component } from '@angular/core';
import { SharingService } from '../../core/services/sharing-data/sharing.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  startYear: number = 1999;
  yearsOfWork!: number;
  constructor(private sharingService: SharingService) {}
  ngOnInit() {
    this.sharingService.showNavHeader(false);
    const currentYear = new Date().getFullYear();
    this.yearsOfWork = currentYear - this.startYear;
  }

  ngOnDestroy(): void {
    this.sharingService.showNavHeader(true);
  }
}
