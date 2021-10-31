import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  constructor(private _global:GlobalService ,private _router:Router) { }
orderData = new FormGroup({
  
  quantity : new FormControl('',Validators.required)
})
  ngOnInit(): void {
  }

  addOrders(orderData:FormGroup){
    this._global.addOrder(orderData.value).subscribe()
  }
}
