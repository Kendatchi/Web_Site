import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';

@NgModule({
    imports: [CommonModule],
    declarations: [BoardComponent]
})
export class BoardModule { }
