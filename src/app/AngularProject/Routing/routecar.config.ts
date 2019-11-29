import { Routes } from '@angular/router';
import { SignupComponent } from '../signup.component';
import { SignupbuttonComponent } from '../signupbutton.component';
import { OtpComponent } from '../otp.component';
import { ServiceLoginComponent } from '../servicelogin.component';
import { DashboardComponent } from '../dashboard.component';
import { BookingComponent } from '../booking.component';
import { EditprofileComponent } from '../editprofile.component';
import { ChangepwdComponent } from '../changepwd.component';
import { Component } from '@angular/core';
import { FrontpageComponent } from '../frontpage.component';
import { LoginComponent } from '../login.component';
import { BookingformaintenanceComponent } from '../bookingformaintenance.component';


export const CarRoute: Routes = [
    {path:'', component: FrontpageComponent, children:[
    // {path: 'login', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    // {path: 'signup', component: SignupComponent},
    {path: 'signup', loadChildren: '../Lazy_loading/signup.module#SignupModule'},
    {path: 'button', loadChildren: '../Lazy_loading/signupbutton.module#SignupbuttonModule'},
    {path: 'otp', loadChildren: '../Lazy_loading/otp.module#OtpModule'},
    {path: 'forgotpwd', loadChildren: '../Lazy_loading/forgotpwd.module#ForgotpwdModule'},
    {path: 'servicelogin', component: ServiceLoginComponent}]},
    {path: 'dashboard', component: DashboardComponent, 
    children:[
        {path: 'booking', loadChildren: '../Lazy_loading/booking.module#BookingModule'},
        // {path: 'edit', component: EditprofileComponent},
        // {path: 'changepwd', component: ChangepwdComponent},
        {path: 'allrecord', loadChildren: '../Lazy_loading/allrecord.module#AllrecordModule'}]
},

{path: 'edit', component: EditprofileComponent, children:
[
    {path: 'changepwd', loadChildren: '../Lazy_loading/changepwd.module#ChangepwdModule'} 
]},
{path: 'maintenance', component: BookingformaintenanceComponent}
    // {path:'booking', component: BookingComponent},
    // {path: 'edit', component: EditprofileComponent},
    // {path: 'changepwd', component: ChangepwdComponent}
    
]