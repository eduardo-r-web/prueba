import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SummaryUser, User } from 'src/app/core/models/users.interfaces';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  summaryUsers$: Observable<SummaryUser[]> | undefined;

  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.summaryUsers$ = this.usersService.getUsers();
  }

}
