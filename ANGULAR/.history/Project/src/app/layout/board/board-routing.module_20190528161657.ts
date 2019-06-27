import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: BoardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
// tslint:disable-next-line:no-trailing-whitespace
export class BoardRoutingModule { } 