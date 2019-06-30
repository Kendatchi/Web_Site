import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, BoardRoutingModule, PageHeaderModule],
    declarations: [BoardComponent]
})
export class BoardModule { }