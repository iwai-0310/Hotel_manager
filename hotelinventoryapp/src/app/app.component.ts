import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import {localStorageToken} from './localstorage.token'
import {Inject} from '@angular/core'
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  
  title = 'hotelinventoryapp';
  // role='Admin'
//   @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;
// ngAfterViewInit() {
//    const componentRef=this.vcr.createComponent(RoomsComponent)
//   //  componentRef.instance.NumberOfRooms=50
//   }
  @ViewChild('name',{static:true}) name!:ElementRef;
  constructor(@Optional() private loggerService:LoggerService,
    @Inject(localStorageToken) private localStorage:any,
    private initService:InitService,
    private configService:ConfigService,
    private router:Router
    ){
      console.log(initService.config)
  }
  ngOnInit(){
    // this.router.events.subscribe((event)=> {console.log(event)})
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationStart))
      .subscribe((event)=>{
        console.log("Navigation started")
      })
      this.router.events.pipe(
        filter((event)=> event instanceof NavigationEnd))
        .subscribe((event)=>{
          console.log("Navigation Ended")
        })
    this.loggerService?.log('AppComponent.ngOnInit()')
    this.name.nativeElement.innerText='Hilton Hotels'
    this.localStorage.setItem('name','Hilton HOTELS')
  }
}
