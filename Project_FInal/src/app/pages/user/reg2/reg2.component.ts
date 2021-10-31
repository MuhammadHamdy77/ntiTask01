import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reg2',
  templateUrl: './reg2.component.html',
  styleUrls: ['./reg2.component.css']
})
export class Reg2Component implements OnInit {


  reg2Form = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3) , Validators.maxLength(20)]),
    email: new FormControl('' ,[Validators.required,Validators.email]),
    password: new FormControl('' , [Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")]),
    phone: new FormControl('' , [Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")]),
    age: new FormControl('' , [Validators.min(18)]),
    gender: new FormControl('', Validators.required),

  })
  constructor(private _global:GlobalService ,private toastr: ToastrService , private router:Router) { }

  ngOnInit(): void {
  }

  emailError=""
  register(reg2Form:any){
    
    console.log(reg2Form.valid);
    if(reg2Form.valid){

      this._global.registerUser(this.reg2Form).subscribe()
    }
  }
}
