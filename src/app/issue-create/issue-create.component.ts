import {Component, OnInit, ViewChild} from '@angular/core';
import {TransferService} from "../services/transfer.service";
import {IssueType, MachineType} from "../models/types";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/index";
import {map, startWith} from "rxjs/internal/operators";
import {element} from "protractor";


@Component({
  selector: 'app-issue-create',
  templateUrl: './issue-create.component.html',
  styleUrls: ['./issue-create.component.scss']
})
export class IssueCreateComponent implements OnInit {
  machine: MachineType;

  machines: MachineType[] = [{title:"Black Knight",manfr:"Williams",year:"1980"}, {title:"Ghostbusters",manfr:"Williams",year:"1980"}, {title:"Baffle Ball",manfr:"Williams",year:"1980"}, {title:"Taxi",manfr:"Williams",year:"1980"}, {title:"Twilight Zone",manfr:"Williams",year:"1980"},
 {title:"Monster Bash",manfr:"Williams",year:"1980"}];

  newIssue: IssueType = {
    priority: "",
    machine: this.machine,
    issue: "",
    notes: "",
    cost: ""
  };

  machineCtrl = new FormControl();
  filteredMachines: Observable<MachineType[]>;

  constructor(private transferService: TransferService) {
   this.filteredMachines = this.machineCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : null)
      );
  }

  private _filterStates(value: string): MachineType[] {
    try {
      const filterValue = value.toLowerCase();
      let regex = new RegExp("\\b" + filterValue, 'gi');
      return this.machines.filter(item => regex.test(item.title));
    }
    catch {
      return null;
    }

        // return items.filter(item => regex.test(item.title));
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  ngOnInit(): void {
    // this.machine = this.transferService.getMachine();
    // this.newIssue.machine = this.machine;

  }

  onSubmit(event: any){
    console.log(this.newIssue);
  }

  getSelected(e){
    console.log(e);
    this.machine = e;
    this.newIssue.machine = e;

  }


}
