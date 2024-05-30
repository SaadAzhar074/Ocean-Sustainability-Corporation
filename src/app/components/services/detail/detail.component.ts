import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharingService } from '../../../core/services/sharing-data/sharing.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  solutionDetail: any[] = [];
  solutionList!: any[];
  selectedId: number | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private sharingService: SharingService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sharingService.showNavHeader(false);
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.solutionDetail = [];
      this.solutionList = [];
      this.selectedId = null;

      this.selectedId = +params?.id;
      this.sharingService.getSolutionDetailData().subscribe({
        next: (res) => {
          const filteredData = res.find(
            (item: any) => item.id === this.selectedId
          );
          this.solutionDetail.push(filteredData);
          console.log(this.solutionDetail);
        },
      });
      this.sharingService.getSolutionData().subscribe({
        next: (data) => {
          this.solutionList = data;
        },
      });
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

  ngOnDestroy(): void {
    this.sharingService.showNavHeader(true);
  }
}
