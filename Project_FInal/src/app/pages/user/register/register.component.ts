import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/providers/services/global.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userData={ name:"" , gender:"" , email:"" , age:"" , password:"" , phone:"" }
  emailError = ""

  constructor(private _global:GlobalService, private toastr: ToastrService ,private router:Router) { }

  ngOnInit(): void {
  }

  register(registerUser:NgForm){

    if(registerUser.valid){

      this._global.registerUser(this.userData).subscribe(
        (res)=>{},
        (err)=>{
          if(err.error.data.includes('email')) this.emailError="email used before"          
        },
        ()=>{
          this.emailError=""
          registerUser.resetForm()
          this.toastr.success("Register','Success");
         setTimeout(() => {
          this.router.navigateByUrl('/user/login?msg=success')
         }, 500);
        },
        )
    }

  }

}
