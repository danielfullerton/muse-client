import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidebar', { static: false })
  sidebarElement: ElementRef;

  showSideBar = false;

  constructor() { }

  ngOnInit() {}

  onContainerClick(event: MouseEvent) {
    const el = event.target as Element;
    const sidebarElement = this.sidebarElement.nativeElement;
    if (!sidebarElement.contains(el)) {
      this.showSideBar = false;
    }
  }

  onMenuIconClick() {
    this.showSideBar = true;
  }
}
