import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  constructor(public _global:GlobalService) { }
  allProdcut:any [] = []
  ngOnInit(): void {
    this.getAllProd()
  }

  getAllProd(){
    this._global.allProd().subscribe(data=>{
        this.allProdcut = data.data
        console.log(this.allProdcut);
        
      }
    )
  }

}
