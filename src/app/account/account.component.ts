import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation/navigation.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private readonly navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.navigationService.setTitle('Account');
  }

}
