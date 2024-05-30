import { Component } from '@angular/core';
import { SharingService } from '../../core/services/sharing-data/sharing.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private sharingService: SharingService) {}
  ngOnInit(): void {
    this.sharingService.showFooterSectionVisible(false);
    this.sharingService.showNavHeader(false);
  }
  ngOnDestroy(): void {
    this.sharingService.showFooterSectionVisible(true);
    this.sharingService.showNavHeader(true);
  }
}
