import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../navigation/navigation.service';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.scss']
})
export class LearnMoreComponent implements OnInit {

  constructor(
    private readonly navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.navigationService.setTitle('Learn More');
  }
}
