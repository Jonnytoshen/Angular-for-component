import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'aol-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit, OnChanges {

  @Input() status: boolean;
  @Input() index: number;
  @Output() evt: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<number> = new EventEmitter();

  private form: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.form) return;
    if(changes['status'] && changes['status'].currentValue) {
      setTimeout(() => {
        this.evt.emit(this.form.getRawValue());
      this.status = false;
      }, 0);
    }
  }

  private onRemove() {
    this.remove.emit(this.index);
  }

}
