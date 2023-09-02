import { Component, OnInit, ChangeDetectionStrategy, DoCheck, ViewChild, AfterViewInit, AfterViewChecked, OnDestroy, SkipSelf } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from './header/header.component';
import { Head, Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { RoomsService } from './services/rooms.service';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
// import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  hotelName = 'Myhotel';
  NumberOfRooms = 100
  hideRooms = true;
  title = 'Room list is 2'

  toggle(): void {
    this.hideRooms = !this.hideRooms
    this.title = "room list"
  }
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = []

  constructor(@SkipSelf() private roomsService : RoomsService,
  private configservice:ConfigService) { }


  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

  ngAfterViewChecked(): void {

  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View"
  }
  ngDoCheck(): void {
    console.log('on changes is called')
  }
  totalBytes=0
  subscription !: Subscription

  error$=new Subject<string>()

  getError$=this.error$.asObservable();

  rooms$=this.roomsService.getRooms$.pipe(
    catchError((err)=>{console.log(err)
      this.error$.next(err)
    return of([])
    })
  )
    roomsCount$=this.roomsService.getRooms$.pipe(
      map((rooms)=>rooms.length)
    )
  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event)=>{
      switch(event.type){
        case HttpEventType.Sent:{
            console.log("request had been sent")
            break;
        }
        case HttpEventType.ResponseHeader:{
          console.log('Request success')
          break;
        }
        case HttpEventType.DownloadProgress:{
          this.totalBytes+=event.loaded
          console.log('The data is being download pls wait:')
          break;
        }
        case HttpEventType.Response:{
          console.log(event.body)
        }
      }
    })
    // console.log(this.roomsService.getRooms())
    this.stream.subscribe({
      next: (value)=> console.log(value),
      complete: () => console.log('completed'),
      error: (err)=>console.log(err)
    })
    this.stream.subscribe((data)=>console.log(data))
    // this.roomsService.getRooms$.subscribe(rooms=>{
    //   this.roomList=rooms
    // })
    // console.log(this.headerComponent)

    // this.roomList = [
    //   {
    //     rating: 4.5,
    //     roomNumber: 304,
    //     roomType: 'deluxe',
    //     amenities: 'AC,Free Wifi, TV, Bathroom,Kitchen',
    //     price: 5000,
    //     photos: 'Mona Lisa',
    //     checkInTime: new Date('11-Nov-2023'),
    //     checkOutTime: new Date('12-Nov-2023')
    //   },
    //   {
    //     rating: 3.5,
    //     roomNumber: 404,
    //     roomType: 'super deluxe',
    //     amenities: 'AC,Free Wifi, TV, Bathroom,Kitchen',
    //     price: 10000,
    //     photos: 'Mona Lisa',
    //     checkInTime: new Date('11-Nov-2023'),
    //     checkOutTime: new Date('12-Nov-2023')
    //   },
    //   {
    //     rating: 2.5,
    //     roomNumber: 500,
    //     roomType: 'average',
    //     amenities: 'AC,Free Wifi, TV, Bathroom,Kitchen',
    //     price: 3000,
    //     photos: 'Mona Lisa',
    //     checkInTime: new Date('11-Nov-2023'),
    //     checkOutTime: new Date('12-Nov-2023')
    //   }
    // ]
   
  }
  selectedRoom!: RoomList

  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }

  addRoom() {
    const room: RoomList = {
      // roomNumber: "4",
      roomType: 'average',
      amenities: 'Sofa,fridge',
      price: 1000,
      photos: 'crocked man',
      checkInTime: new Date('13-Dec-2023'),
      checkOutTime: new Date('14-Dec-2023'),
      rating: 3.3
    }
    // this.roomList.push(room)
    this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data)=>{
      this.roomList=data
    })
  }
  editRoom(){
    const room: RoomList = {
      roomNumber: "3",
      roomType: 'average',
      amenities: 'Sofa,fridge',
      price: 1000,
      photos: 'crocked man',
      checkInTime: new Date('13-Dec-2023'),
      checkOutTime: new Date('14-Dec-2023'),
      rating: 3.3
    }
    this.roomsService.editRoom(room).subscribe((data)=>{
      this.roomList=data;
    })
  }
  deleteRoom(){
    this.roomsService.deleteRoom('3').subscribe((data)=>{
      this.roomList=data;
    })
  }
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent
  stream=new Observable(observer=>{
    observer.next('User1')
    observer.next('User2')
    observer.next('User3')
    observer.complete()
    // observer.error()
  })
 
}
