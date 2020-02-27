import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DaysService {
  constructor(private http: HttpClient) {}

  getDays(): Observable<any[]> {
    return this.http.get<any[]>(
      "http://mathieulancelle.be/api/amicale-lincentoise/days.json"
    );
  }
}
