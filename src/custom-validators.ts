import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export function customPattern(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (!control.value) {
          return null;
        }
        const valid = regex.test(control.value);
        return valid ? null : error;
    };
}

export function confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value === confirmPassword.value ? null : { NoPassswordMatch: true };
};