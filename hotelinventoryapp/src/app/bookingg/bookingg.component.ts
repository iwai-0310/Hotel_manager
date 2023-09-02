import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'app-bookingg',
  templateUrl: './bookingg.component.html',
  styleUrls: ['./bookingg.component.scss']
})
export class BookinggComponent implements OnInit {
  bookingForm!: FormGroup
  constructor(private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService:BookingService
    ) { }
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId:new FormControl({value:'2',disabled:true},{validators:[Validators.required]}),
      guestEmail: ['',
      {
        updateOn:'blur',
        validators:[Validators.required,Validators.email],
      }
      ],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobilenumber: [''],
      guestName: ['',[Validators.required,Validators.minLength(5),CustomValidator.ValidateName,
      CustomValidator.ValidateSpecialChar('*')]],
      address: this.fb.group({
        addressLine1: ['',{validators:[Validators.required]}],
        addressLine2: [''],
        City: ['',{validators:[Validators.required]}],
        State: ['',{validators:[Validators.required]}],
        Country: ['',{validators:[Validators.required]}],
        ZipCode: ['',[Validators.required]]
      }),
      guests:this.fb.array([
        this.addGuestControl(),
      ]),tnc:new FormControl(false,{validators:[Validators.requiredTrue]}),
    },{updateOn:'Blur',validators:[CustomValidator.ValidateDate]})
    // ,{updateOn:''})
    this.getBookingData()
    // this.bookingForm.valueChanges.subscribe((data)=>{
    //   this.bookingService.bookRoom(data).subscribe((data)=>{})
    // })
    this.bookingForm.valueChanges.pipe(
      exhaustMap((data)=> this.bookingService.bookRoom(data))
    ).subscribe((data)=>{
      console.log(data)
    })
  }
  getBookingData(){
    this.bookingForm.patchValue({
      roomId:'2',
      guestEmail:'test@gmail.com',
      checkinDate:new Date('10-Feb-2023'),
      checkoutDate:new Date('11-Feb-2023'),
      bookingStatus:'',
      bookingDate:'',
      mobilenumber:'',
      bookingAmount:'',
      guestName:'',
      address:{
        addressLine1:'',
        addressLine2:'',
        City:'',
        State:'',
        Country:'',
        ZipCode:''
      },
      guests:[],
      tnc:false,
    })
    
  }
  addBooking() {
    console.log(this.bookingForm.getRawValue())
    // this.bookingService.bookRoom(this.bookingForm.getRawValue())
    //   .subscribe((data)=>{
    //     console.log(data)
    //   })
    // this.bookingForm.reset()
  }
  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }
  addGuestControl(){
    return this.fb.group({guestName:['',{validators:[Validators.required]}],age:new FormControl('')})
  }
  addGuest(){
    this.guests.push(
      // 
      this.addGuestControl()
    )
  }
  addPassport(){
    this.bookingForm.addControl('passport',new FormControl(''))
  }
  deletePassport(){
    if(this.bookingForm.get('passport')){
      this.bookingForm.removeControl('passport')
    } 
  }
  removeGuest(e:number){
    this.guests.removeAt(e)
  }
}

