import { Component, OnInit } from '@angular/core';

import { Tea } from '../tea';
import { TeaService } from '../services/tea.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent implements OnInit {

  selectedTea: Tea;
  teas: Tea[];

  constructor(private teaService: TeaService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getTeas();
  }

  onSelect(tea: Tea): void
  {
    this.selectedTea = tea;
    //this.messageService.add('TeaService: Selected tea id=$(tea.id)');
    this.messageService.add('TeaService: selected tea id=' + this.selectedTea.id);
  }

  getTeas(): void
  {
    this.teaService.getTeas()
      .subscribe(teas => this.teas = teas);
  }

}
