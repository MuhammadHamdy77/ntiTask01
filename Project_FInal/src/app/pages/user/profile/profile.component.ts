import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData :any ={}
  constructor(private _global:GlobalService) { }


  ngOnInit(): void {
    this._global.profile().subscribe(
      (data)=>{
        this.userData = data.data
        console.log(data)
        // this.userData.image = "1.jpg"
      }
    )
  }

}
