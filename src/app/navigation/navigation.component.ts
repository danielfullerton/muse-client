import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationService, NavStyle} from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidebar', { static: false })
  sidebarElement: ElementRef;

  @ViewChild('navBar', { static: false })
  navBar: ElementRef;
  showSideBar = false;

  constructor(
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.navigationService.stylesChanged.subscribe(styles => {
      this.navBar.nativeElement.style.backgroundColor = styles.backgroundColor;
    });

    this.navigationService.sideBarClosed.subscribe(() => {
      this.showSideBar = false;
    });
  }

  onContainerClick(event: MouseEvent) {
    const el = event.target as Element;
    if (!this.sidebarElement.nativeElement.contains(el)) {
      this.showSideBar = false;
    }
  }

  onMenuIconClick() {
    this.showSideBar = true;
  }
}
