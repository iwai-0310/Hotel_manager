import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title:string=''
  constructor(private configService:ConfigService){}
  ngOnInit():void{}
} 
