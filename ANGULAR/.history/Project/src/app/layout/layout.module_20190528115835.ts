import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ], declarations: [HeaderComponent, NavbarComponent, FooterComponent, LayoutComponent]
})
export class LayoutModule { }
