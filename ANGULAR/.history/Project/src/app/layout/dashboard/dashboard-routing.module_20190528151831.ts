import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../components/header/header.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: '/onglet2', component: HeaderComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}