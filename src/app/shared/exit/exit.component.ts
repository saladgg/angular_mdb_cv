import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exit",
  template: `
    <h1>
      Exiting--->>>>---->>>---->>
    </h1>
  `,
  styles: [
    ":host {display: block;border: 1px solid blue;}",
    "h1{color:#3560f7;}"
  ]
})
export class ExitComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
