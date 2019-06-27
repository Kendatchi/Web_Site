import { NgModule } from '@angular/core';
import { BoardComponent } from '.board.component';
import { RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: BoardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoardComponent { }