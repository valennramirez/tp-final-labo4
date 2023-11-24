import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AutService } from 'src/app/services/user/aut.service';

Component({
  selector: 'app-aut-guard',
  templateUrl: './aut-guard.component.html',
  styleUrls: ['./aut-guard.component.css']
})

function checkEstatusAutenticacion (): boolean | Observable<boolean>
{
  const autService = inject(AutService); 
  const router = inject(Router); 

  const user: User | undefined = autService.currentUser; 

  return autService.checkEstatusAutenticacion()
                   .pipe(
                    tap(estado => {if(!estado) router.navigate(['/login'])})
                   )
}
export const AutGuardComponent = () => {
  return checkEstatusAutenticacion(); 
}
