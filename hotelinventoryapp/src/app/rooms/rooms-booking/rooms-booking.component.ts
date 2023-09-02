import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})


export class RoomsBookingComponent implements OnInit {
  constructor(private router:ActivatedRoute){}
  id:number=0
  id$=this.router.params.pipe(map((params)=> params['roomid']))
  ngOnInit(): void {
    // this.id=this.router.snapshot.params['roomid']
    // this.router.params.subscribe((params)=>{
    //    this.id=params['roomid']
    // })
    // this.id$=this.router.params.pipe(
    //   map(params => params['roomid'])
    // )
  }
}
