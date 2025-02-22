import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../ProductList/product-list.component';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Electronics', 'Home Appliances', 'Accessories', 'Gaming'];
  selectedCategory: string | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
