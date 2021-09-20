import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements AfterViewInit {
  @ViewChild(SidebarComponent)
  sidenav!: SidebarComponent;

  constructor(private observer: BreakpointObserver) { }
  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.breakpoint = true;
        this.sidenav.close();
      } else {
        this.sidenav.breakpoint = false;
        this.sidenav.open();
      }
    });
  }
}