import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SummaryUser, User } from '../../models/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private httpClient: HttpClient) { }

  getUsers(): Observable<SummaryUser[]>{
    return this.httpClient.get<User[]>(`${environment.API_URL}users`)
      .pipe(
        map( (users: User[]) => {
          let summary: SummaryUser[] = [];
          let i = 1
          users.forEach( user => {
            summary.push({
              name: user.name,
              city: user.address.city,
              email: user.email,
              company_name: user.company.name,
              image: 'assets/images/user'+i+'.webp'
            });
            i++;
          });
          return summary;
        })
      )
  }
}
