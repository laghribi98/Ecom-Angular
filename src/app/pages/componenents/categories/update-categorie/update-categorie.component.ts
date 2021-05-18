import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieModule } from '../models/categorie/categorie.module';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'ngx-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.scss']
})
export class UpdateCategorieComponent implements OnInit {

  constructor(private route: ActivatedRoute,private CategorieService: CategorieService,private router: Router) { }
  categorie:any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.CategorieService.findById(id).subscribe(data => {this.categorie = data; });
    console.log(this.categorie);

  }

  OnSubmitUpdate(){
    
    this.CategorieService.updateCategorie(this.categorie).subscribe(result =>this.gotoNewListCategories());
    console.log(this.categorie);
   
  }
  gotoNewListCategories(){
    this.router.navigate(['pages/categories']);
    console.log(this.categorie);
  }

}
