import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { SharingService } from '../../core/services/sharing-data/sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HomeComponent {
  solutionList!: any[];
  vendorsList = [
    {
      src: 'assets/logos/1.png',
    },
    {
      src: 'assets/logos/2.png',
    },
    {
      src: 'assets/logos/3.png',
    },
    {
      src: 'assets/logos/4.png',
    },
    {
      src: 'assets/logos/5.webp',
    },
    {
      src: 'assets/logos/6.svg',
    },
    {
      src: 'assets/logos/7.svg',
    },
    {
      src: 'assets/logos/8.png',
    },
    {
      src: 'assets/logos/9.svg',
    },
    {
      src: 'assets/logos/10.png',
    },
    {
      src: 'assets/logos/11.jfif',
    },
    {
      src: 'assets/logos/12.svg',
    },
    {
      src: 'assets/logos/13.png',
    },
    {
      src: 'assets/logos/14.svg',
    },
    {
      src: 'assets/logos/15.png',
    },
    {
      src: 'assets/logos/16.png',
    },
  ];
  constructor(private sharingService: SharingService,  private router: Router) {}
  startYear: number = 1999;
  yearsOfWork!: number;
  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.yearsOfWork = currentYear - this.startYear;
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
