import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboradComponent } from './dashborad/dashborad.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboards', pathMatch: 'prefix' },
    { path: 'dashboard', component: DashboradComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
