import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieModule } from '../models/categorie/categorie.module';
import { CategorieService } from '../services/categorie.service';


@Component({
  selector: 'ngx-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: CategorieModule[];
  categorie: CategorieModule;
 constructor(private CategorieService: CategorieService,private router:Router) {
   this.categorie = new CategorieModule();
 }

 ngOnInit(): void {
    this.CategorieService.getAll().subscribe(data => {this.categories = data; });
 }

 delete(categorie: CategorieModule): void{
  console.log("delete Categorie");
  this.CategorieService.deleteCategorie(categorie).subscribe((response) => {this.ngOnInit(); });
  this.gotoListCategories();
  }
  
  gotoListCategories(){
    this.router.navigate(['pages/categories']);
  }
}
