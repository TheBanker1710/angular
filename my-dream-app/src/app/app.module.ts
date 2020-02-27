import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { EmployeeService } from "./employee.service";
import { HttpClientModule } from "@angular/common/http";
import { DaysService } from "./days.service";

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [EmployeeService, DaysService],
  bootstrap: [AppComponent]
})
export class AppModule {}
