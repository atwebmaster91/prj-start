import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Description of the recipe','https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/11/cauli-kale-sausage-bake.jpg?itok=cBznL0if')
  ];

  constructor() { }

  ngOnInit() {
  }

}
