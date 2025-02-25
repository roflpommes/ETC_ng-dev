import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Person, wealthOptsValues } from '../person.model';
import { PersonService } from '../person.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  styleUrls: ['./forms-builder.component.scss'],
})
export class FormsBuilderComponent implements OnInit {
  person: Person = new Person();
  wealthOpts = wealthOptsValues;

  personForm: FormGroup;

  constructor(private fb: UntypedFormBuilder, private ps: PersonService) {
    this.personForm = this.fb.group({
      name: [this.person.name, Validators.required],
      age: [this.person.age],
      gender: [this.person.gender],
      email: [this.person.email],
      wealth: [this.person.wealth],
    });
  }

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.personForm.patchValue(p);
      console.log('Data loaded from service', p);
    });

    setTimeout(() => {
      // Use this to update form incrementally
      this.personForm.patchValue({ name: 'Heinrich' });
      console.log('Heinz changed to Heinrich');
    }, 3000);
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
