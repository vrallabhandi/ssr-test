import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserService } from '../random-user.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  user$: Observable<any>;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.user$ = this.randomUserService.getData();
  }
}
