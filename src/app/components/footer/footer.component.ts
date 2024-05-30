import { ChangeDetectorRef, Component } from '@angular/core';
import { SharingService } from '../../core/services/sharing-data/sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  solutionList!: any[];

  footerSectionHide!: boolean;
  constructor(
    private sharingService: SharingService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sharingService.getFooterSectionVisible().subscribe({
      next: (data) => {
        this.footerSectionHide = data;
        this.cdr.detectChanges();
      },
    });
    this.sharingService.getSolutionData().subscribe({
      next: (data) => {
        this.solutionList = data;
      },
    });
  }
  routeToServiceDetail(data: any) {
    this.router.navigate(['solutions/detail'], {
      queryParams: {
        id: data?.id,
        name: data?.name,
      },
    });
  }
}
