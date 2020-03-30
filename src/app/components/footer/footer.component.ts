import {Component, OnInit} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
faPlus=faPlus;
faList=faList;
faCog=faCog;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onList(){
    this.router.navigateByUrl('/list');
  }

  onIssue(){
     this.router.navigateByUrl('/newIssue');
  }

  onCog(){
     this.router.navigateByUrl('/newMachine');
  }


}
