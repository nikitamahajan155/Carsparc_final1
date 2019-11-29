import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'login-comp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})

export class LoginComponent {
    Varlogin: FormGroup
    model: any = {};
    constructor(private LC: LoginService, private _router: Router) {
        this.Varlogin = new FormGroup({
            Contact: new FormControl(),
            Password: new FormControl(),

        })
    }

    loginDetails: any
    public LoginCredentials(data: any) {

        console.log(JSON.stringify(data));
        // alert(JSON.stringify(data))

        this.LC.LoginCredentials(data).subscribe(res => {
            this.loginDetails = res
            console.log(res);
            if (this.loginDetails === "Login Successfully") {
                this._router.navigate(['/dashboard'])//;
                //alert('User Logged in Successfully')

            }
            else {
                this._router.navigate(['/login']);
                alert('Not a valid user')
            }
        }, err => {
            console.log(err);
            this.loginDetails = err
        });

        //alert(JSON.stringify(this.loginDetails))

        // if(this.loginDetails && data.Contact == this.loginDetails.Contact && this.loginDetails.Password){
        //if(this.loginDetails && data.Password === this.loginDetails.Password){

    }
}




