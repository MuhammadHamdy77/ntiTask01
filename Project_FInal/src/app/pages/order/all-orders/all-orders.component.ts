import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  constructor(private _global:GlobalService) { }
  quantityOrder:any [] = []
  prodId:any [] = []
  userId:any [] = []

  
  ngOnInit(): void {
    this.getallOrder()
  }
  getallOrder(){
    this._global.allOrders().subscribe(data=>{
        this.quantityOrder = data[0].product
        this.userId = data[0].user
        this.prodId = data[0]._id
        console.log(this.quantityOrder , this.userId , this.prodId);
        
      },

    )
  }
  

}
