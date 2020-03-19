import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-department-list",
  template: `
    <h3>Departement List</h3>
    <ul class="items list-group">
      <li
        (click)="onSelect(department)"
        *ngFor="let department of departments"
        [ngClass]="{
          'active list-group-item': isSelected(department),
          'list-group-item': true
        }"
      >
        <span class="badge badge-primary">{{ department.id }}</span
        >{{ department.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Ruby" },
    { id: 5, name: "Bootstrap" }
  ];
  public selectedId;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    //this.router.navigate(["/departments", department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}
