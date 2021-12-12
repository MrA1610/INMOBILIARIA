import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { role } from '../modelo/role';
import { user } from '../modelo/user';
import {UserService} from '../service/user.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  user = new user();

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage=''
 
  constructor(
    private userService:UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  listaRoles: role[] = [
    {id:0, name: 'Interesado'},
    {id:1, name: 'Anunciante'},
    {id:2, name: 'Asesor'},
    {id:3, name: 'Admin'}
  ];

  signUp():void{
    console.log("signUp");
  }

  onSubmit():void{
    this.userService.createUser(this.user).subscribe({
      next: (response)=>{
        console.log(response);
        this.isSuccessful=true;
        this.isSignUpFailed=false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.isSuccessful=false;
        this.isSignUpFailed=true;
        if(err.status===404){
          this.errorMessage='The server is not found';
        }else{
          this.router.navigate(['login']);
        }
        console.error('Error: ' + err.message);
      },
      complete:()=>{
        console.log('Completed');
      }
    }); 
  }
}
