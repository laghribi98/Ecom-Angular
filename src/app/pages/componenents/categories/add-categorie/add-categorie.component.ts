import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieModule } from '../models/categorie/categorie.module';
import { CategorieService } from '../services/categorie.service';


@Component({
  selector: 'ngx-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})
export class AddCategorieComponent implements OnInit {
  categorie = new CategorieModule();
  constructor(private CategorieService: CategorieService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitCategorie(){
    console.log(this.categorie)
    this.CategorieService.saveCategorie(this.categorie).subscribe(result => this.gotoListCategories());
  }
  gotoListCategories(){
    this.router.navigate(['pages/categories']);
  }
}
