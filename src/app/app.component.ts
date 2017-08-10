import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private items = [];
  private status: boolean = false;
  private count = 0;

  private ret = [];
  private result;

  ngOnInit() {}

  private onAdd() {
    this.items.push(this.items.length);
    this.status = false;
  }

  private onSubmit() {
    this.ret = [];
    this.count = 0;
    this.status = true;
  }

  private onEvt($event) {
    this.count++;
    this.ret.push($event);
    if(this.count === this.items.length) {
      this.status = false;
      this.result = JSON.stringify(this.ret);
    }
  }

  private onRemove($event) {
    this.items.splice($event, 1);
    this.status = false;
  }
}
