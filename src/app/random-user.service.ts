import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://randomuser.me/api/').pipe(
      map((d) => {
        console.log(d);
        return d;
      })
    );
  }
}
