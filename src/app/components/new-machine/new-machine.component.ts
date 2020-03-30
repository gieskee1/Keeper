import {Component, OnInit} from '@angular/core';
import {MachineType} from "../../models/types";

@Component({
  selector: 'app-new-machine',
  templateUrl: './new-machine.component.html',
  styleUrls: ['./new-machine.component.scss']
})
export class NewMachineComponent implements OnInit {

  machine: MachineType = {title:'',manfr:'',year:''};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e){
    console.log(this.machine);
  }

}
