import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MachineSelectComponent} from "./components/machine-select/machine-select.component";
import {IssueCreateComponent} from "./components/issue-create/issue-create.component";
import {NewMachineComponent} from "./components/new-machine/new-machine.component";


const routes: Routes = [
  { path: 'list', component: MachineSelectComponent},
  {path: 'newIssue', component: IssueCreateComponent},
  {path: 'newMachine', component: NewMachineComponent},
  {path: '',  redirectTo:'/list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MachineSelectComponent];
