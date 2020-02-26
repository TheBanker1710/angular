import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-test",
  template: `
    <div>
      <h3>Test component</h3>
      <p>Bienvenu {{ name }}</p>
      <p>{{ greetUser() }}</p>
      <h2 [ngClass]="messageClasses">Ma super phrase</h2>
      <input type="text" [id]="myId" value="Mathieu" />
      <input [disabled]="isDisabled" type="text" [id]="myId" value="Mathieu" />
      <button (click)="onClick($event)">Greet</button>
      <button (click)="greet = 'Welcome Mathieu'">Greet</button>
      <input #myInput type="text" />
      <button (click)="logMessage(myInput.value)">Log</button>
      {{ greet }}

      <div>
        <input [(ngModel)]="name" type="text" />
        {{ name }}
      </div>
      <h2>{{ "Hello " + parentData }}</h2>
      <button (click)="fireEvent()">Send event</button>
    </div>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-error {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `
  ]
})
export class TestComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  public name;
  public greet = "";
  public isDisabled = true;
  public myId = "testId";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };
  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return "Bienvenue " + this.name;
  }

  onClick(event) {
    console.log(event);
    this.greet = event.type;
  }

  logMessage(value) {
    console.log(value);
  }

  fireEvent() {
    this.childEvent.emit("Hey My App Angular");
  }
}
