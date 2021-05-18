import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategorieModule } from '../models/categorie/categorie.module';




@Injectable({
  providedIn: 'root'
})

export class CategorieService {
  
  public url:string;
  constructor(private http:HttpClient) { 
    this.url="http://127.0.0.1:8000/api/categories/";
  }

  public getAll(): Observable<CategorieModule[]>{
    //console.log(this.http.get<CategorieModule[]>(this.url));
    return this.http.get<CategorieModule[]>(this.url);
  }
  public saveCategorie(categorie: CategorieModule){
    return this.http.post<CategorieModule>(this.url ,categorie);
  }
  public deleteCategorie(categorie: CategorieModule){
    return this.http.delete(this.url  + categorie.id,{responseType: 'text'});
  }
  public findById(id):Observable<CategorieModule>{
    return this.http.get<CategorieModule>(this.url+ id);
  }
  public updateCategorie(categorie: CategorieModule){
    return this.http.patch(this.url  + categorie.id, categorie );
  }
}
