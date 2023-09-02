import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  bookRoom(bookingg:any){
   return this.http.post('https://jsonplaceholder.typicode.com/posts',bookingg)
  }
}
