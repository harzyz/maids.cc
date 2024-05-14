import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {
  users: any = [];
  page: number = 1;
  searchUser: string = '';
  isLoading: boolean = false;

  constructor(private service: UsersService, private router: Router) {}

  ngOnInit() {
    this.service.getUsers(this.page).subscribe((res) => {
      this.users = res.data;
      console.log(this.users);
    });
  }

  get() {
    this.service.getUsers(this.page).subscribe((res) => {
      this.users = res.data;
      console.log(res);
    });
  }

  onSearch() {
    this.isLoading = true;
    const searchTerm = this.searchUser.toLowerCase();
    // const filteredUsers = this.users.filter((res: any) => {
    //   return (
    //     res.first_name.toLowerCase().includes(searchTerm) ||
    //     res.last_name.toLowerCase().includes(searchTerm)
    //   );
    // });
    // setTimeout(() => {
    //   this.users = filteredUsers;
    //   this.isLoading = false;
    // }, 500);

    this.service.getAllUsers().subscribe((res: any) => {
      const allUsers = res.data;
       console.log(allUsers, 'us')
  
      // Filter users based on search term
      const filteredUsers = allUsers.filter((user: any) => {
        return user.first_name.toLowerCase().includes(searchTerm) ||
          user.last_name.toLowerCase().includes(searchTerm);
      });
  
      this.users = filteredUsers;
      this.isLoading = false;
    })
  }

  // onSearch() {
  //   this.isLoading = true;

  //   const searchTerm = this.searchUser.toLowerCase();
  //   const filteredUsers = this.users.filter((res: any) => {
  //     return res.first_name.toLowerCase().includes(searchTerm) ||
  //       res.last_name.toLowerCase().includes(searchTerm);
  //   });

  //   // Simulate a delay of 500ms before setting isLoading back to false
  //   setTimeout(() => {
  //     this.users = filteredUsers;
  //     this.isLoading = false;
  //   }, 500);
  // }

  // onSearch() {
  //   const searchTerm = this.searchUser.toLowerCase(); // Assuming searchUser is a string property
  //   const filteredUsers = this.users.filter((user: any) => { // Use typed user object
  //     return user.first_name.toLowerCase().includes(searchTerm) ||
  //            user.last_name.toLowerCase().includes(searchTerm);
  //   });
  //   this.users = filteredUsers; // Assign the filtered results to the users property
  // }

  pageer(page: number) {
    this.page = page;
    this.get();
  }

  readMore(user: any) {
    this.router.navigate(['/', user.id]);
  }
}
