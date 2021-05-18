import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AddCategorieComponent } from './componenents/categories/add-categorie/add-categorie.component';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { CategoriesComponent } from './componenents/categories/list-categorie/categories.component';
import { UpdateCategorieComponent } from './componenents/categories/update-categorie/update-categorie.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    PagesComponent,
    CategoriesComponent,
    AddCategorieComponent,
    UpdateCategorieComponent,
  ],
})
export class PagesModule {
}
