import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs/Observable";

export class UsernameValidators {
    static cannotContainSpace(control : AbstractControl): ValidationErrors {
        if((control.value as string).indexOf(' ')>=0){
            return {cannotContainSpace: true};
        }
        return null;
    }

    static shoulBeUnique(control : AbstractControl): Promise<ValidationErrors | null>{
        return new Promise ((resolve, reject )=>{
                setTimeout(() => {
                    if (control.value == 'zeeshan'){
                        resolve( {shoulBeUnique: true});
                    }
                    else resolve(null);
                }, 2000);
        });
    }
}