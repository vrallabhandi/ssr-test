import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserService } from '../random-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$: Observable<any>;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.user$ = this.randomUserService.getData();
  }
}
