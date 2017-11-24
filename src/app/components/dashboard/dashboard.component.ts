import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';
  users: User[];
  hasUsers = true;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .then(users => {
        this.users = users;
        this.hasUsers = users.length > 0;
      })
      .catch(error => console.log(error));
  }
}
