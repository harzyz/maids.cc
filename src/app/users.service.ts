import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'https://reqres.in/api/users?page={page}'

  constructor(private http: HttpClient) { }

  getUsers(page: number) {
    return this.http.get<any>(`https://reqres.in/api/users?page=${page}`)
  }

  // getUsers(page: number): Observable<any> {
  //   return this.http.get(`https://reqres.in/api/users?page=${page}`);
  // }

  getUser(id: number){
    return this.http.get<any>(`https://reqres.in/api/users/${id}`)
  }

  getAllUsers(): Observable<any[]> {
    return this.getAllUsersRecursive(1, []);
  }

  private getAllUsersRecursive(page: number, allUsers: any): Observable<any[]> {
    return this.http.get<any>(`https://reqres.in/api/users?page=${page}`).pipe(
      switchMap((res) => {
        const users = res.data;
        // console.log(users, 'you')
        allUsers.push(...users);
        return of(allUsers);
      })
    );
  }
}
