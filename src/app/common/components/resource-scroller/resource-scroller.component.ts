import {Component, Input, OnInit} from '@angular/core';

export interface Resource {
  displayName: string;
  subText: string;
  onItemClick: () => void;
  onOptionsClick: (index: number) => void;
}

@Component({
  selector: 'app-resource-scroller',
  templateUrl: './resource-scroller.component.html',
  styleUrls: ['./resource-scroller.component.scss']
})
export class ResourceScrollerComponent implements OnInit {
  @Input()
  private resources: Resource[];

  @Input()
  private height: string;

  constructor() { }

  ngOnInit() {
  }

}
