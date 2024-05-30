import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private isVisibleFooterSection = new BehaviorSubject<boolean>(true);
  private isVisibleNavHeader = new BehaviorSubject<boolean>(true);
  private solutionJSON = 'assets/json/solution.json';
  private solutionDetailJSON = 'assets/json/solution-detail.json';
  constructor(private http: HttpClient) {}
  // footer ---------------------->
  showFooterSectionVisible(data: boolean) {
    this.isVisibleFooterSection.next(data);
  }
  getFooterSectionVisible(): Observable<boolean> {
    return this.isVisibleFooterSection.asObservable();
  }
  // navbar ---------------------->
  showNavHeader(data: boolean) {
    this.isVisibleNavHeader.next(data);
  }
  getNavHeader(): Observable<boolean> {
    return this.isVisibleNavHeader.asObservable();
  }
  // solution data ---------------------->
  getSolutionData(): Observable<any> {
    return this.http.get<any>(this.solutionJSON);
  }
  // solution detail data ---------------------->
  getSolutionDetailData(): Observable<any> {
    return this.http.get<any>(this.solutionDetailJSON);
  }
}
