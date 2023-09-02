import { Injectable } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList:RoomList[] = [
    // {
    //   rating: 4.5,
    //   roomNumber: 304,
    //   roomType: 'deluxe',
    //   amenities: 'AC,Free Wifi, TV, Bathroom,Kitchen',
    //   price: 5000,
    //   photos: 'Mona Lisa',
    //   checkInTime: new Date('11-Nov-2023'),
    //   checkOutTime: new Date('12-Nov-2023')
    // },
    // {
    //   rating: 3.5,
    //   roomNumber: 404,
    //   roomType: 'super deluxe',
    //   amenities: 'AC,Free Wifi, TV, Bathroom,Kitchen',
    //   price: 10000,
    //   photos: 'Mona Lisa',
    //   checkInTime: new Date('11-Nov-2023'),
    //   checkOutTime: new Date('12-Nov-2023')
    // },
    // {
    //   rating: 2.5,
    //   roomNumber: 500,
    //   roomType: 'average',
    //   amenities: 'AC,Free Wifi, TV, Bathroom,Kitchen',
    //   price: 3000,
    //   photos: 'Mona Lisa',
    //   checkInTime: new Date('11-Nov-2023'),
    //   checkOutTime: new Date('12-Nov-2023')
    // }
  ]
  // headers=new HttpHeaders({'token':"123456789chaze"})
  getRooms$=this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  )

  constructor(private http:HttpClient) { 
    console.log('Rooms service initalized')
  }
  getRooms(){
    // const header=new HttpHeaders({'token':"123456789chaze"})
    console.log('connecting to the api/room')
    return this.http.get<RoomList[]>('/api/rooms')
  }
  addRoom(room:RoomList){
    return this.http.post<RoomList[]>('/api/rooms',room)
  }
  editRoom(room:RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`,room)
  }
  deleteRoom(id:string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
  }
  getPhotos(){
    const request=new HttpRequest('GET',`https://jsonplaceholder.typicode.com/photos`,
    {reportProgress:true,}
    );
    return this.http.request(request)}
}
