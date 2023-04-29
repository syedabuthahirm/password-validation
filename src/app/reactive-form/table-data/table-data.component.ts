import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent {
  @Input() form!: FormGroup;
  @Input() rasMapping!: FormArray;
}
