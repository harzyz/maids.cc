import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user:any = {} 

  constructor(private service: UsersService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = params['id']
      this.service.getUser(userId).subscribe((res) => {
        this. user = res.data
      })
    })
  }

}
