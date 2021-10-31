import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image:any[]=[
    "assets/images/1.jpg","assets/images/2.jpg" , "assets/images/3.jpg"
  ]
  constructor(public _global:GlobalService) { }
allRoles:any [] = []
  ngOnInit(): void {
    this.getAllRole()
  }


  getAllRole(){
    this._global.getAllRoles().subscribe(d=>{

      this.allRoles = d.data
    console.log(this.allRoles);
    
      
    })
  }

}
