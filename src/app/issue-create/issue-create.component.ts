import {Component, OnInit, ViewChild} from '@angular/core';
import {TransferService} from "../services/transfer.service";
import {IssueType, MachineType} from "../models/types";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";


@Component({
  selector: 'app-issue-create',
  templateUrl: './issue-create.component.html',
  styleUrls: ['./issue-create.component.scss']
})
export class IssueCreateComponent implements OnInit {
  machine: MachineType;
  newIssue: IssueType = {
    priority: "",
    machine: this.machine,
    issue: "",
    notes: "",
    cost: ""
  };

  constructor(private transferService: TransferService) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  ngOnInit(): void {
    this.machine = this.transferService.getMachine();
    this.newIssue.machine = this.machine;

  }

  onSubmit(event: any){
    console.log(this.newIssue);
  }


}
