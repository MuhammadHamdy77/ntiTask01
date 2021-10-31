import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errLogin =""
  loginForm = new FormGroup({
    email: new FormControl('' , [Validators.email , Validators.required]),
    password:new FormControl('' , [Validators.required , Validators.minLength(3)])
  })
  constructor(private _global:GlobalService, private router:Router) { }

  ngOnInit(): void {
  }

get email(){return this.loginForm.get('email')}
get password(){return this.loginForm.get('password')}
  login(){
   
    
    this._global.loginUser(this.loginForm.value).subscribe(
      (data)=>{
      localStorage.setItem('UserToke' , data.data.token)
    },
    (e)=>{console.log(e); this.errLogin=e.error.data},
    ()=>{
      this.errLogin=""
      this._global.isAuthed = true
      this.router.navigate(["/user"])
      
    },
    )
  }

}
