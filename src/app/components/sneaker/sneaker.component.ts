import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Sneaker } from 'src/app/models/sneaker';

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css']
})
export class SneakerComponent implements OnInit {

  sneakerList: Sneaker[] = [];
  sneaker!: Sneaker;
  
  form: FormGroup;
  
  modelNameField: FormControl;
  priceField: FormControl;
  specialEditionField: FormControl;
  authorField: FormControl;
  creationDateField: FormControl;
  artistCollaboratorField: FormControl;

  specialEdition: boolean = false;
  

  constructor() { 
    
    // Initialize formControl
    this.modelNameField = new FormControl('', [Validators.required]);
    this.priceField = new FormControl('', [Validators.required, Validators.min(0.01)]);
    this.specialEditionField = new FormControl(this.specialEdition, []);
    this.authorField = new FormControl('', [Validators.required]);
    this.creationDateField = new FormControl('', [Validators.required]);
    this.artistCollaboratorField = new FormControl('', []);
    
    // Initialize formGroup
    this.form = new FormGroup({
      modelName: this.modelNameField,
      price: this.priceField,
      specialEdition: this.specialEditionField,
      author: this.authorField,
      creationDate: this.creationDateField,
      artistCollaborator: this.artistCollaboratorField
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formDirective: FormGroupDirective): void { // El formDirective es para que se reseteen los valores al submitear
    if(this.form.valid) {
      this.sneakerList.push(this.form.value); // añado los valores del form a la sneaker
      this.form.reset();
      formDirective.resetForm(); // con esto se resetea el form
    }
  }
    
}
