import {Component, Input,OnChanges, OnInit} from '@angular/core';
import {MachineType} from "../models/types";
import {TransferService} from "../services/transfer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-machine-select',
  templateUrl: './machine-select.component.html',
  styleUrls: ['./machine-select.component.scss']
})
export class MachineSelectComponent implements OnInit {

  machines: MachineType[] = [{title:"Black Knight",manfr:"Williams",year:"1980"}, {title:"Ghostbusters",manfr:"Williams",year:"1980"}, {title:"Baffle Ball",manfr:"Williams",year:"1980"}, {title:"Taxi",manfr:"Williams",year:"1980"}, {title:"Twilight Zone",manfr:"Williams",year:"1980"}, {title:"Monster Bash",manfr:"Williams",year:"1980"}];
  @Input() inputTitle: string;

  constructor(private transferService: TransferService, private router: Router) { }

  ngOnInit(): void {
  }

  inputChange() {
      console.log(this.inputTitle);
    }

  titleClick(machine){
    this.transferService.setMachine(machine);
    console.log(machine.title);
    this.router.navigateByUrl('/newIssue');
  }

}
