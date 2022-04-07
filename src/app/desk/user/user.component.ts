import { Component, Input, OnInit } from '@angular/core';
import { SummaryUser } from 'src/app/core/models/users.interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() summaryUser: SummaryUser | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.summaryUser);
  }

}
