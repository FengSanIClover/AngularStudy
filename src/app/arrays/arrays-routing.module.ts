import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateArrayComponent } from "./create-array/create-array.component";

const routes: Routes = [
  {
    path: "CreateArray",
    component: CreateArrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArraysRoutingModule {}
