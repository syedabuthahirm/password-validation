import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  
  form = this.fb.group({
      formatName: this.fb.control('', Validators.required),
      isXML: this.fb.control(false),
      rasMapping: this.fb.array([])
  });

  constructor(private fb:FormBuilder) {}

  get rasMapping() {
    return this.form.controls["rasMapping"] as FormArray;
  }

  addRASMapping() {
    const lessonForm = this.fb.group({
      dbField: ['', Validators.required],
      position: ['beginner', Validators.required],
      rasInclude: [false],
      length: ['', Validators.required]
    });
    this.rasMapping.push(lessonForm);
  }

  deleteRASMapping(lessonIndex: number) {
    this.rasMapping.removeAt(lessonIndex);
  }

  onSubmit() {
    console.warn(this.form.value);
  }

  reset(event: any) {
    const newform = this.fb.group({
      formatName: this.fb.control('dfa', Validators.required),
      isXML: this.fb.control(true),
      rasMapping: this.fb.array([])
    });
    this.rasMapping.clear();
    this.form.reset(newform.value);
  }
}
