import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MachineSelectComponent } from './components/machine-select/machine-select.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from "./pipes/filter.pipe";
import {IssueCreateComponent} from "./components/issue-create/issue-create.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatSelectModule} from "@angular/material/select";
import {TextFieldModule} from "@angular/cdk/text-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NewMachineComponent} from "./components/new-machine/new-machine.component";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    MachineSelectComponent,
    IssueCreateComponent,
    NavBarComponent,
    NewMachineComponent,
    FooterComponent,
    FilterPipe,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    MatSelectModule,
    TextFieldModule,
    MatToolbarModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
