import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static invalidProjectName(control: FormControl): {[s: string]: boolean} | null {
      if (control.value === 'Test') {
        return {'invalidProjectName': true};
      }
      return null;
    }

    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (control.value === 'Testing') {
              resolve({'invalidProjectName': true});
            } else {
              resolve(null);
            }
          }, 5000);
        })
        return promise;
      }
}