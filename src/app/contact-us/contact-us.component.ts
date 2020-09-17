import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserService } from '../random-user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  user$: Observable<any>;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.user$ = this.randomUserService.getData();
  }
}
