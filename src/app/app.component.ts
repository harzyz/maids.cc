import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'maidstest-dashboard';

  // users: any = []
  // page: number = 1

  // constructor(private service: UsersService){

  // }

  // ngOnInit(){
  //   this.service.getUsers(this.page).subscribe((res) => {
  //     this.users = res.data
  //     console.log(this.users)
  //   })
  // }

  // get(){
  //   this.service.getUsers(this.page).subscribe((res) => {
  //     this.users = res.data
  //     console.log(res)
  //   })
  // }

  // pageer(page: number) {
  //   this.page = page
  //   this.get()
  // }
}
