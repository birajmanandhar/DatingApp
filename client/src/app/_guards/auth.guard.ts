import { CanActivateFn, UrlTree, mapToCanActivate } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const accountService: AccountService = inject(AccountService);
  const toastr: ToastrService = inject(ToastrService);
  console.log('guard check now');

  return accountService.currentUser$.pipe(
    map(user => {
      //console.log(user);
      if(user) return true;
      toastr.error('You are not authorized');
      return false;
    })
  );
};
