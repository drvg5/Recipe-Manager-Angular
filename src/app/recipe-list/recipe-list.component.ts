import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  recipes = [
    {id: 1, name: 'Biryani', description: 'rice,chicken,spices,coriander'},
    {id: 1, name: 'Pizza', description: 'bread,cheese,tomato sauce,black olives'},
    {id: 1, name: 'General Tao Chicken', description: 'chicken,sweet sauce'}
  ];

  selectedRecipe?: any;

  ngOnInit(): void {
  }

  onSelect(recipe:any): void{
    this.selectedRecipe = recipe;
  }

  onDelete(recipe:any): void{
    this.selectedRecipe = recipe;
  }

}
