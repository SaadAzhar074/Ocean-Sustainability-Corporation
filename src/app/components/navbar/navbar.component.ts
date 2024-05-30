import { ChangeDetectorRef, Component } from '@angular/core';
import { SharingService } from '../../core/services/sharing-data/sharing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  scrolled: boolean = false;

  isVisibleNavheader!: boolean;
  constructor(
    private sharingService: SharingService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.sharingService.getNavHeader().subscribe({
      next: (data) => {
        this.isVisibleNavheader = data;
        this.cdr.detectChanges();
      },
    });
  }
}
