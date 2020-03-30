import { Injectable } from '@angular/core';
import {MachineType} from "../models/types";

@Injectable({  providedIn: 'root'})
export class TransferService {

  constructor() { }

  private machine: MachineType;

  setMachine(data){
    this.machine = data;
  }

  peekMachine(){
    return this.machine;
  }

  getMachine(){
    let temp = this.machine;
    this.clearMachine();
    return temp;
  }

  clearMachine(){
    this.machine = undefined;
  }

}
