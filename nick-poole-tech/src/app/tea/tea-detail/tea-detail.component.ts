import { Component, OnInit, Input } from '@angular/core';
import { Tea } from '../Tea';

@Component({
  selector: 'app-tea-detail',
  templateUrl: './tea-detail.component.html',
  styleUrls: ['./tea-detail.component.css']
})
export class TeaDetailComponent implements OnInit {

  constructor() { }

  @Input() tea: Tea;

  ngOnInit(): void {
  }

}
