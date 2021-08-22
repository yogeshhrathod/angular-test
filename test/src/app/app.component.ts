import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
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



