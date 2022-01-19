import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-categories-tutorials',
  templateUrl: './categories-tutorials.component.html',
  styleUrls: ['./categories-tutorials.component.css'],
})
export class CategoriesTutorialsComponent implements OnInit {
  categories: String[][] = [
    ['Peinture', 'format_paint'],
    ['Cuisine', 'kitchen'],
    ['Plomberie', 'plumbing'],
    ['Salle de bain', 'bathtub'],
    ['Exterieur', 'outdoor_grill'],
    ['Carrelage', 'grid_view'],
  ];

  public constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle("Category's tutorials");
  }
}
