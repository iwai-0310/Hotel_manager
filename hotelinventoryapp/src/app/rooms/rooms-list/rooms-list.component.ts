import { Component, EventEmitter, Input, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnDestroy {
@Input() rooms:RoomList[] | null=[]

@Input() title:string=''
@Output() selectedRoom=new EventEmitter<RoomList>()
  constructor(){}
  ngOnInit():void{}
  ngOnChanges(changes : SimpleChanges):void{
    console.log(changes)
    if(changes['title']){
      this.title=changes['title'].currentValue.toUpperCase()
    }
  }
  selectRoom(room : RoomList){
    this.selectedRoom.emit(room)
  }
  ngOnDestroy(): void {
    console.log('on Destory is called')}
}
