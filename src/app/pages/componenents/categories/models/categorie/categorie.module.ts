import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CategorieModule { 
  id: BigInteger;
  description: string;
  img: string
  constructor(){}
}
