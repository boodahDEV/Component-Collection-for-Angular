import { Component, OnInit } from "@angular/core";
import { NB_THEME_OPTIONS } from '@nebular/theme';

@Component({
  selector: "app-card-design",
  templateUrl: "./card-design.component.html",
  styleUrls: ["./card-design.component.scss"],
})
export class CardDesignComponent implements OnInit {
  isHeader = false;
  isMoreCol = false;
  isMoreRow = false;
  gridToogle= new Array()

  constructor() {}

  ngOnInit(): void {}

  toogleHeader(checked: boolean) {
    this.isHeader = checked;
  }

  selectGridCol(select: any) {
    if (select === "more") {
      this.gridToogle.push({"tag":"Col:"})
    }
  }

  selectGridRow(select: any) {
    if (select === "more") {
      this.gridToogle.push({"tag":"Row:"})
    }
  }

  loadCard() {
    //Esto para generar el nuevo card al finalizar
  }
}
