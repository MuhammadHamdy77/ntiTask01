
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  errProd=""
  ProductForm  = new FormGroup({
    name: new FormControl(null, Validators.required),
    price: new FormControl(null, [Validators.pattern("^(0|[1-9][0-9]*)$"),Validators.required]),
    category: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),

   })
  constructor(private _global:GlobalService ,private router:Router) { }

  ngOnInit(): void {
  }


get name(){return this.ProductForm.get('name')}
get price(){return this.ProductForm.get('price')}
get category(){return this.ProductForm.get('category')}
get description(){return this.ProductForm.get('description')}

addProd(ProductForm:FormGroup){
     console.log(ProductForm.value);
this._global.addProducts(ProductForm.value).subscribe(
  (d)=>{console.log(d);
  },
  (e)=>{console.log(e); this.errProd = e.error.d},
  ()=>{

    this.errProd=""
    this._global.isAuthed = true
    this.router.navigate(["/product"])
  },
)
  
}
    

}
