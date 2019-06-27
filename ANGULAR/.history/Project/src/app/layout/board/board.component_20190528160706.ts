import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [routerTransition()]

})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
