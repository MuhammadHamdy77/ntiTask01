import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedGuard implements CanDeactivate<unknown> {
  constructor(private _global:GlobalService ,private _router:Router){}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
      if(!localStorage.getItem("UserToke") || this._global.isAuthed){

        this._router.navigateByUrl('/')
        return false
      }
    return true;
  }
  
}
