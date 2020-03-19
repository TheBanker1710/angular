import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { forbiddenNameValidator } from "./shared/user-name.validator";
import { PasswordValidator } from "./shared/password-validator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup;

  get userName() {
    return this.registrationForm.get("userName");
  }

  get email() {
    return this.registrationForm.get("email");
  }

  get alternateEmails() {
    return this.registrationForm.get("alternateEmails") as FormArray;
  }

  addAlternateEmail() {
    alert("ici");
    this.alternateEmails.push(this.fb.control(""));
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group(
      {
        userName: [
          "thebanker1710",
          [
            Validators.required,
            Validators.minLength(3),
            forbiddenNameValidator(/password/)
          ]
        ],
        password: [""],
        confirmPassword: [""],
        email: [""],
        subscribe: [false],
        address: this.fb.group({
          city: [""],
          state: [""],
          zip: [""]
        }),
        alternateEmails: this.fb.array([])
      },
      { validator: PasswordValidator }
    );
    this.registrationForm
      .get("subscribe")
      .valueChanges.subscribe(checkedValue => {
        const email = this.registrationForm.get("email");
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  /*  registrationForm = new FormGroup({
      userName: new FormControl("thebanker1710"),
      password: new FormControl(""),
      confirmPassword: new FormControl(""),
      address: new FormGroup({
        city: new FormControl(""),
        state: new FormControl(""),
        zip: new FormControl("")
      })
    });*/

  loadApiData() {
    /*this.registrationForm.setValue({
      userName: "Bruce",
      password: "test",
      confirmPassword: "test",
      address: {
        city: "City",
        state: "State",
        zip: "123456"
      }
    });*/

    this.registrationForm.patchValue({
      userName: "Bruce",
      password: "test",

      address: {
        city: "City",

        zip: "123456"
      }
    });
  }
}
