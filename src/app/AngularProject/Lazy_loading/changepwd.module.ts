import { NgModule } from '@angular/core';
import { ChangepwdComponent } from '../changepwd.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


export const changepwdRoute: Routes=[
    {path: '', redirectTo: 'changepwd', pathMatch:'full'},
    { path: 'changepwd', component: ChangepwdComponent}
]

@NgModule({
    declarations: [ChangepwdComponent],
    imports: [RouterModule.forChild(changepwdRoute), CommonModule],
    providers: [],
    exports: [ChangepwdComponent]
})

export class ChangepwdModule{

}