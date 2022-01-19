import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTutorialsComponent } from './categories-tutorials.component';

describe('CategoriesTutorialsComponent', () => {
  let component: CategoriesTutorialsComponent;
  let fixture: ComponentFixture<CategoriesTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
