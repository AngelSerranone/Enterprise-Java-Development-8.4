import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    
    static nameValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        const regex = /\d/;
        if (regex.test(value)) {
            return { invalidname: true }
        }
        return null;
    }


}
