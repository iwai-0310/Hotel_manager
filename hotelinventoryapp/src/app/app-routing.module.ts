import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent,canActivate:[loginGuard]},
  {path:'login',component:LoginComponent},
  {path:'rooms',
  loadChildren:()=>
  import('./rooms/rooms/rooms.module').then(m => m.RoomsModule),
  // canActivate:[loginGuard],canLoad:[loginGuard]
  },
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'booking', loadChildren: () => import('./bookingg/bookingg.module').then(m => m.BookinggModule)
  // ,canActivate:[loginGuard]
},
  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
