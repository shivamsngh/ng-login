import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector:'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  private subscription: Subscription;
  message: any;

  constructor(private alertSvc: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertSvc.getMessage().subscribe(message => this.message = message)
  }

}
