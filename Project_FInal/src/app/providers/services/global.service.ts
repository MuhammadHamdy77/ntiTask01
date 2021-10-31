import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private _http:HttpClient) { }
  public userData:any = null
  public isAuthed = false
  public imgUrl = "http://medical.marwaradwan.org/storage/app/public/"
  apiMainUrl = "http://localhost:3000/"
  getAllRoles():Observable<any>{
    
    return this._http.get('http://medical.marwaradwan.org/api/auth/loadRoles/1')
  }

registerUser(user:any):Observable<any>{

 return this._http.post(`${this.apiMainUrl}user/register` , user)
}

loginUser(user:any):Observable<any>{

  return this._http.post(`${this.apiMainUrl}user/login` , user)
 }
 profile():Observable<any>{
  return this._http.post(`${this.apiMainUrl}user/profile` , null)
}

addProducts(product:any):Observable<any>{

  return this._http.post(`${this.apiMainUrl}product/addproduct` , product)
 }
 
allProd():Observable<any>{

  return this._http.get(`${this.apiMainUrl}product/all`)
}

logout():Observable<any>{
 return this._http.post(`${this.apiMainUrl}user/logout` , null)
}


allOrders():Observable<any>{

  return this._http.get(`${this.apiMainUrl}order/all`)
}

addOrder(order:any):Observable<any>{
  return this._http.post(`${this.apiMainUrl}order/add` , order)
}
}