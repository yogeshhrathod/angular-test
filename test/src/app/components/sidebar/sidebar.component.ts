import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isNavbarClose = false
  breakpoint = false;
  navigationItems = [
    { name: "Dashboard", path: "/dashboard", icon: "dashboard" },
    { name: "People", path: "/people", icon: "user" },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  get currentRoute() {
    return this.router.url
  }

  close() {
    this.isNavbarClose = true;
    console.log(this.isNavbarClose);
  }

  open() {
    this.isNavbarClose = false;
    console.log(this.isNavbarClose);
  }

}
