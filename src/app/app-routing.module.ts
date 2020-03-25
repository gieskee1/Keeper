import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MachineSelectComponent} from "./machine-select/machine-select.component";
import {IssueCreateComponent} from "./issue-create/issue-create.component";


const routes: Routes = [
  { path: 'search', component: MachineSelectComponent},
  {path: 'newIssue', component: IssueCreateComponent},
  {path: '',  redirectTo:'/search', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MachineSelectComponent];
